import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Species Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
