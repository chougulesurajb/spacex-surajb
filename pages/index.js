import Head from "next/head";
// import styles from "../styles/Home.module.css";

import { App } from "../src";

export default function Home() {
  // console.log("data", data);
  return (
    <div>
      <Head>
        <title>Space X</title>
      </Head>
      <div className="app-container app-nav">
        <main>
          <h1 className="app-heading">Space X Launch Programs</h1>
        </main>
      </div>
      <App />
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
