import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
import SlideShow from "../components/SlideShow";
import requests from "../utils/requests";

export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>Movie Junkie</title>
      </Head>

      <Header />
      <Nav />
      <SlideShow results={results} />
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
