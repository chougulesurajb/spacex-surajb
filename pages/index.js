import Head from "next/head";
// import styles from "../styles/Home.module.css";

import { App } from "../src/App";

export default function Home({ data }) {
  console.log("data", data);
  return (
    <div className={""}>
      <Head>
        <title>Space X</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={""}>
        <h1 className={""}>Space X</h1>
      </main>
      <App {...data} />
      <footer className={""}>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Powered by{" "}
        </a>
      </footer>
    </div>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://api.spaceXdata.com/v3/launches?limit=100`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
