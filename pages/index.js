import Head from "next/head";

import App from "../src/App";
import SEO from "../src/SEO";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Space X</title>
        <link rel="icon" href="/favicon.ico" />
        <SEO />
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
