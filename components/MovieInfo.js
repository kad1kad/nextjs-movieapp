import TrailerButton from "./TrailerButton";
import Link from "next/link";
import { ChevronLeftIcon } from "@heroicons/react/outline";
import {
  CircularProgress,
  CircularProgressLabel,
  Badge,
} from "@chakra-ui/react";

function MovieInfo({
  title,
  origTitle,
  movieDescription,
  trailerId,
  children,
  rating,
  genres,
  year,
  runtime,
}) {
  let trailerText;

  if (trailerId < 1) {
    trailerText = "Trailer unavailable";
  } else {
    trailerText = "Trailer";
  }

  let originalTitle;
  if (origTitle === title) {
    originalTitle = "";
  } else {
    originalTitle = origTitle;
  }

  // For Rating Circle

  function multiplyRating(rating) {
    const ratingTimesTen = rating * 10;

    return ratingTimesTen;
  }

  const releaseYear = year.slice(0, 4);

  return (
    <div className="absolute top-0 w-screen p-5 text-gray-100 bg-gradient-to-b from-slate-900/50">
      {/* COMPONENT THIS INFO BELOW */}
      <section className="my-5">
        <Link href="/">
          <a className="flex items-center mb-5 hover:underline underline-offset-8">
            <ChevronLeftIcon className="inline h-5" /> Home
          </a>
        </Link>

        <h1 className="text-3xl">{title}</h1>
        <span>{originalTitle}</span>

        <div className="flex flex-wrap gap-5 mt-5 text-sm font-light tracking-wide">
          {genres.map((genre) => (
            <Badge variant="subtle" colorScheme="green" key={genre.id}>
              {genre.name}
            </Badge>
          ))}

          <Badge variant="outline" colorScheme="whatsapp">
            {releaseYear}
          </Badge>
          <Badge variant="outline" colorScheme="whatsapp">
            {runtime} min
          </Badge>
        </div>

        <p className="mt-8 lg:w-1/2 xl:w-1/3">{movieDescription}</p>
      </section>

      <div className="flex items-center mt-10 gap-9">
        <TrailerButton trailer_id={trailerId} buttonText={trailerText} />
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">User Score:</span>
          <CircularProgress
            capIsRound
            value={multiplyRating(rating)}
            color="green.400"
          >
            <CircularProgressLabel>
              {multiplyRating(rating)}%
            </CircularProgressLabel>
          </CircularProgress>
        </div>
      </div>

      {children}
    </div>
  );
}

export default MovieInfo;
