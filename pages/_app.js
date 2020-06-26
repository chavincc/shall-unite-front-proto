import Head from "next/head";

function MyApp({ Component, pageProps }) {
  console.log("custom app");
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="logo.ico" />
        <title>Shall Unite</title>
      </Head>
      <Component {...pageProps} />
      <style jsx global>
        {`
          * {
            font-family: IBM Plex Sans;
          }

          body {
            max-height: 100vh;
            max-width: 100vw;
            overflow: hidden;
            margin: 0;
          }
        `}
      </style>
    </>
  );
}

export default MyApp;
