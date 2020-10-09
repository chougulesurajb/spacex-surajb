import Head from "next/head";
// import styles from "../styles/Home.module.css";

import { App } from "../src";

export default function Home({ data }) {
  // console.log("data", data);
  return (
    <div className={""}>
      <Head>
        <title>Space X</title>
      </Head>
      <div className="app-container app-nav">
        <main>
          <h1 className="app-heading">Space X Launch Programs</h1>
        </main>
      </div>
      <App data={data} />
      <div className="app-container app-footer">
        <footer>
          <a
            href="https://github.com/chougulesurajb/spacex-surajb"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by <strong>Surajkumar Chougule</strong>
          </a>
        </footer>
      </div>
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
