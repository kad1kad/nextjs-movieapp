import Thumbnail from "./Thumbnail";

function SimilarMovies({ results }) {
  return (
    <div className="sm:grid md:grid-cols-2 lg:grid-cols-3 mt-3">
      {results.slice(0, 6).map((result) => (
        <Thumbnail result={result} key={result.id} />
      ))}
    </div>
  );
}

export default SimilarMovies;
