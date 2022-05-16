import Thumbnail from "./Thumbnail";

function Results({ results }) {
  return (
    <section className="flex-wrap justify-center px-5 mt-8 sm:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:flex">
      {results.map((result) => (
        <Thumbnail result={result} key={result.id} />
      ))}
    </section>
  );
}

export default Results;
