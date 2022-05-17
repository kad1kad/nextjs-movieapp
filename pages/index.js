import Head from "next/head";
import Header from "../components/Header";

import Results from "../components/Results";

import requests from "../utils/requests";

export default function Home({ results }) {
  return (
    <div className="relative overflow-x-hidden">
      <Head>
        <title>Movie Junkie</title>
      </Head>

      <Header results={results} />

      <Results results={results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  console.log(context);
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());
  return {
    props: {
      results: request.results,
    },
  };
}
