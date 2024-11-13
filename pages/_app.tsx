import { ConfigProvider } from 'antd';
import { QueryClientProvider, QueryClient } from 'react-query';
import '@styles/custom.scss';
import '@styles/globals.scss';
import type { AppProps } from 'next/app';

// Create Query Client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#0C4C89',
            colorBorder: '#546368',
            colorInfo: '#0C4C89',
            colorWarning: '#546368',
            borderRadius: 10,
          },
        }}
      >
        <Component {...pageProps} />
      </ConfigProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
