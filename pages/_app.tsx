import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { AuthProvider } from 'src/context/AuthContext';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
