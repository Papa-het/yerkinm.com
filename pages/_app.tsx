import Head from 'next/head';
import type { AppProps } from 'next/app';

import '../styles/index.scss';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Yerkin Myrzabekov: Front-end Developer</title>
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
