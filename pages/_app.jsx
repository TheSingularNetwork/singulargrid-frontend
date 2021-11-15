import Head from "next/head";

import "tailwindcss/tailwind.css";

export default function _App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Singular Grid</title>
        <meta name="description" content="..." />
      </Head>

      <div className="w-full min-h-screen p-4 bg-white">
        <Component {...pageProps} />
      </div>
    </>
  );
}
