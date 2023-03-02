import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Bitmono | Homepage</title>
        <meta
          name="description"
          content="An open-source, free protector for Mono"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Hello</h1>
        <button className="btn">Hello</button>
      </main>
    </>
  );
};

export default Home;
