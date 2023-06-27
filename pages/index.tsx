import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Species Blog</title>

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
      </Head>

      <main>
        <Navbar />
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
