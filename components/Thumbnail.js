/* eslint-disable react/display-name */
import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
import useDimensions from "react-cool-dimensions";

function Thumbnail({ result }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  const releaseDate = result.release_date || result.first_air_date;
  const releaseYear = releaseDate?.slice(0, 4);

  const { observe, width } = useDimensions();

  return (
    <div className="p-2 transition duration-150 ease-in transform cursor-pointer group sm:hover:scale-105 hover:z-8">
      <Link href={`/movie/${result.id}`} key={result.id}>
        <div ref={observe}>
          <Image
            src={
              `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
              `${BASE_URL}${result.poster_path}`
            }
            width={1920}
            height={1080}
            sizes={width !== undefined ? `${Math.round(width)}px` : "100vw"}
            layout="responsive"
            alt={result.title}
            className="rounded-xl"
          />
        </div>
      </Link>

      <div className="py-2">
        <p className="max-w-md truncate">{result.overview} </p>
      </div>
      <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out ">
        {result.title || result.original_name}
      </h2>
      <p className="flex items-center opacity-0 group-hover:opacity-100">
        {releaseYear} • <ThumbUpIcon className="h-5 mx-2" /> {result.vote_count}
      </p>
    </div>
  );
}

export default Thumbnail;
