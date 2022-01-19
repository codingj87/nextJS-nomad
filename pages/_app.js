import React from "react";
import Layout from "../components/Layout";
import NavBar from "../components/NavBar";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
