/* eslint-disable react/display-name */
import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { forwardRef } from "react";
import Link from "next/link";

const Thumbnail = forwardRef(({ result }, ref) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  const releaseDate = result.release_date || result.first_air_date;
  const releaseYear = releaseDate?.slice(0, 4);

  return (
    <div
      ref={ref}
      className="p-2 transition duration-150 ease-in transform cursor-pointer group sm:hover:scale-105 hover:z-8"
    >
      <Link href={`/movie/${result.id}`} key={result.id}>
        <Image
          src={
            `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
            `${BASE_URL}${result.poster_path}`
          }
          height={1080}
          width={1920}
          layout="responsive"
          alt={result.title}
          className="shadow-lg rounded-xl"
        />
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
});

export default Thumbnail;
