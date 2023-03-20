import '../styles/global.css';

import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <div className="min-h-screen bg-[#1D2535]   text-gray-400">
    <Component {...pageProps} />
  </div>
);

export default MyApp;
