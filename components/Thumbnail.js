/* eslint-disable react/display-name */
import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { forwardRef } from "react";
import Link from "next/link";

const Thumbnail = forwardRef(({ result }, ref) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original";

  return (
    <div
      ref={ref}
      className="group cursor-pointer p-2 transition duration-150 ease-in transform sm:hover:scale-105 hover:z-8"
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
        />
      </Link>
      <div className="py-2">
        <p className="truncate max-w-md">{result.overview} </p>
      </div>
      <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
        {result.title || result.original_name}
      </h2>
      <p className="flex items-center opacity-0 group-hover:opacity-100">
        {result.release_date || result.first_air_date} •{" "}
        <ThumbUpIcon className="h-5 mx-2" /> {result.vote_count}
      </p>
    </div>
  );
});

export default Thumbnail;
