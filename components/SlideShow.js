import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import Link from "next/link";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Show, Box } from "@chakra-ui/react";

function SlideShow({ results }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original";

  return (
    <Carousel
      className="mt-10 "
      autoPlay={true}
      infiniteLoop={true}
      showStatus={false}
    >
      {results.slice(10, 14).map((result) => (
        <Link href={`/movie/${result.id}`} key={result.id}>
          <div key={result.id} className="cursor-pointer">
            <Image
              src={`${BASE_URL}${result.backdrop_path}`}
              height={500}
              width={1920}
              objectFit="cover"
              alt={result.title}
            />
          </div>
        </Link>
      ))}
    </Carousel>
  );
}

export default SlideShow;
