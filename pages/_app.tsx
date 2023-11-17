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

import Sidenav from '@lib/components/Layout/Sidebar/Sidenav';
import { ClassProvider } from 'context/ClassContext';
import { store } from '../redux/store';

const App = ({
  Component,
  pageProps: { session, ...pageProps },
  router,
}: AppProps<{
  session: Session;
  dehydratedState: unknown;
}>): React.ReactNode => {
  const isAuthScreen = router.pathname.startsWith('/auth/');
  const isPosScreen = router.pathname.startsWith('/pos');

  return (
    <ClassProvider>
      <ChakraProvider theme={theme}>
        <Suspense fallback={<div>Loading...</div>}>
          <SessionProvider session={session}>
            <Provider store={store}>
              {isAuthScreen || isPosScreen ? (
                // If it's an auth or pos screen, render without Sidenav
                <>
                  <Head>
                    <title>POS</title>
                  </Head>
                  <Component {...pageProps} />
                </>
              ) : (
                // If it's not an auth or pos screen, render with Sidenav
                <Sidenav>
                  <Head>
                    <title>POS</title>
                  </Head>
                  <Component {...pageProps} />
                </Sidenav>
              )}
            </Provider>
          </SessionProvider>
        </Suspense>
      </ChakraProvider>
    </ClassProvider>
  );
};

export default App;
