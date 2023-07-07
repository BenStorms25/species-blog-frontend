import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Species Blog</title>

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
      </Head>

      <main>
        <Navbar />
        <Sidebar />
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
