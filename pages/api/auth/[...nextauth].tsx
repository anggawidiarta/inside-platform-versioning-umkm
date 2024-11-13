import NextAuth, { NextAuthOptions } from 'next-auth';
import Auth0Provider from 'next-auth/providers/auth0';
import CredentialsProvider from 'next-auth/providers/credentials';
import { TLoginData, TUser, TReqLoginParams } from '@lib/entities/Auth';
import { loginRequest, loginRequestAuth0 } from '@lib/repositories/Auth';

export const authOptions: NextAuthOptions = {
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_ID as string,
      clientSecret: process.env.AUTH0_SECRET as string,
      issuer: process.env.AUTH0_ISSUER,
    }),
    CredentialsProvider({
      id: 'login',
      type: 'credentials',
      credentials: {
        emailOrUsername: {
          label: 'Email',
          type: 'email',
          placeholder: 'example@mail.com',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials): Promise<TLoginData> {
        try {
          const response = await loginRequest(credentials as TReqLoginParams);

          if (response.data) {
            return response.data;
          } else {
            throw new Error(response.message as unknown as string);
          }
        } catch (error) {
          throw new Error(error as unknown as string);
        }
      },
    }),
  ],
  session: {
    maxAge: 2 * 24 * 60 * 60, // 2 days
  },
  pages: {
    signIn: '/login',
    error: `/login`,
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith('/')) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
    async signIn({ user, account }) {
      if (account?.provider === 'auth0' && account) {
        try {
          const response = await loginRequestAuth0({
            token: account.access_token as string,
          });
          if (response.data?.token) {
            account.token = response.data?.token;
            user.id = response.data.user.id?.toString();
            user.name = response.data.user.fullname;
            user.email = response.data.user.email;
          } else if (response.code === 400 || response.code === 500) {
            return `/login?error=${response.message}`;
          }
        } catch (error) {
          return `/login?error=${error}`;
        }
      }

      if (user) return true;
      return false;
    },
    async jwt({ token, user, account }) {
      const currentUser = user as unknown as TLoginData;
      if (account?.provider === 'auth0' && account) {
        token.token = account.token;
        token.accessToken = account.access_token;
        token.idToken = account.id_token;
        token.refreshToken = account.refresh_token;
      }
      return { ...token, ...currentUser };
    },
    async session({ session, token }) {
      session.token = token.token;
      session.user = token.user as unknown as TUser;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: true,
  logger: {
    error: (code, metadata) =>
      console.log(`Error ${code} : ${metadata}`, metadata),
    debug: (code, metadata) => console.log(`Debug ${code} : ${metadata}`),
    warn: (code) => console.log(`Warn ${code}`),
  },
};
export default NextAuth(authOptions);
