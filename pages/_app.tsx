/* eslint-disable */
import { ChakraProvider } from '@chakra-ui/react';
import type { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Suspense } from 'react';
import { Provider } from 'react-redux';
import { theme } from 'styles/theme';

import 'react-widgets/styles.css';
import '../styles/variables.css';
import { store } from '../redux/store';

const App = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{
  session: Session;
  dehydratedState: unknown;
}>): React.ReactNode => {
  return (
    <ChakraProvider theme={theme}>
      <SessionProvider session={session}>
        <Provider store={store}>
          <Suspense fallback={<div>Loading...</div>}>
            <Head>
              <title>POS</title>
            </Head>
            <Component {...pageProps} />
          </Suspense>
        </Provider>
      </SessionProvider>
    </ChakraProvider>
  );
};

export default App;
