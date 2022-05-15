import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import Link from "next/link";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function SlideShow({ results }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original";

  return (
    <div className="">
      <Image
        src={
          `${BASE_URL}${results[0].backdrop_path || results[0].poster_path}` ||
          `${BASE_URL}${results[0].poster_path}`
        }
        layout="fill"
        objectFit="cover"
        alt={results.title}
        quality={75}
      />
    </div>
  );
}

export default SlideShow;
