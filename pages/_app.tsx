/* eslint-disable */
import { ChakraProvider } from '@chakra-ui/react';
import type { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Suspense } from 'react';
import { Provider } from 'react-redux';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { theme } from 'styles/theme';

import 'react-widgets/styles.css';
import 'styles/phone-input.css';
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
      <Suspense fallback={<div>Loading...</div>}>
        <SessionProvider session={session}>
          <Provider store={store}>
            <Head>
              <title>POS</title>
            </Head>
            <Component {...pageProps} />
          </Provider>
        </SessionProvider>
      </Suspense>
    </ChakraProvider>
  );
};

export default App;
