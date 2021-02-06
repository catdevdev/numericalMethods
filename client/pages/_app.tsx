/* imports */
import "../styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
/* component */
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
