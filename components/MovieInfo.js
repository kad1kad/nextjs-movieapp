import TrailerButton from "./TrailerButton";
import Link from "next/link";
import { ChevronLeftIcon } from "@heroicons/react/outline";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import GenreYearRuntimeBadge from "./GenreYearRuntimeBadge";

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
  let originalTitle;
  if (origTitle === title) {
    originalTitle = !origTitle;
  } else {
    originalTitle = origTitle;
  }

  // For Rating Circle

  function multiplyRating(rating) {
    const ratingTimesTen = rating * 10;

    return ratingTimesTen;
  }

  // Release date without day and month

  const releaseYear = year.slice(0, 4);

  // console.log(genres);

  return (
    <div className="absolute top-0 w-screen p-5 text-gray-100 bg-gradient-to-b from-slate-900/70">
      <section className="my-3">
        <Link href="/">
          <a className="flex items-center mb-5 hover:underline underline-offset-8">
            <ChevronLeftIcon className="inline h-5" /> Home
          </a>
        </Link>

        <h1 className="text-3xl font-semibold">{title}</h1>
        <span>{originalTitle}</span>

        <GenreYearRuntimeBadge
          genres={genres}
          releaseYear={releaseYear}
          runtime={runtime}
        />

        <p className="mt-8 lg:w-1/2 xl:w-1/3">{movieDescription}</p>
      </section>

      <div className="flex items-center mt-10 gap-9">
        <TrailerButton trailer_id={trailerId} />

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
