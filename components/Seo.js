import React from "react";
import Head from "next/head";

function Seo({ title }) {
  return (
    <Head>
      <title>{title} | Next Movie</title>
    </Head>
  );
}

export default Seo;
