import Head from "next/head";

import App from "../src/App";
import SEO from "../src/SEO";

export default function Slug({ data }) {
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
export async function getServerSideProps({ param, query }) {
  const url = `https://api.spaceXdata.com/v3/launches?limit=100${
    query.year ? `&launch_year=${query.year}` : ""
  }${query.launch ? `&launch_success=${query.launch}` : ""}${
    query.landing && query.landing === "true"
      ? `&land_success=${query.landing}`
      : ""
  }`;

  const res = await fetch(url);
  const data = await res.json();
  return { props: { data } };
}
