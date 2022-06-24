import Layout from "../components/layout";

import "@fortawesome/fontawesome-svg-core/styles.css";
import "./../node_modules/bulma/css/bulma.css";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
