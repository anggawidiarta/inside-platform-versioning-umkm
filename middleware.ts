import { withAuth } from 'next-auth/middleware';

export default withAuth(
  function (req) {
    //Handle for checking another function, ex: i18n
    return;
  },
  {
    // Callback for checking authorization token
    callbacks: {
      authorized: async ({ token }) => {
        return !!token;
      },
    },
  }
);

export const config = {
  matcher: [
    '/profile',
    '/proposals',
    '/notification',
    '/juri/:path*',
    '/competitions/:slug/form',
    '/competitions/:slug/formChat',
    '/submission-report',
  ],
};
