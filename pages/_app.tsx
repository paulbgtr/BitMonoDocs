import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { AppProps } from "next/app";

import Layout from "../components/Layout";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
