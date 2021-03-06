import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';
import type { AppProps } from 'next/app';
import { AuthProvider } from 'src/context/AuthContext';
import { FavoritesProvider } from 'src/context/FavoritesContext';
import '../styles/globals.css';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
      <AuthProvider>
        <FavoritesProvider>
          <Component {...pageProps} />
        </FavoritesProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
