import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";
import Link from "next/link";

function Results({ results }) {
  return (
    <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:flex flex-wrap justify-center">
      {results.map((result) => (
        <Thumbnail result={result} key={result.id} />
      ))}
    </FlipMove>
  );
}

export default Results;
