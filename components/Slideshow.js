import Image from "next/image";
import Link from "next/link";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import useDimensions from "react-cool-dimensions";

function Slideshow({ results }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original";

  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 4000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  const { observe, width } = useDimensions();

  return (
    <div ref={sliderRef} className="keen-slider max-h-[70vh] cursor-pointer">
      <div className="keen-slider__slide number-slide1">
        <Link href={`/movie/${results[0].id}`} key={results.id}>
          <div>
            <div className="absolute z-50 px-4 bottom-8 h-fit text-slate-100">
              <h2 className="text-xl font-semibold w-3/4 md:text-4xl xl:text-6xl">
                {results[0].title}
              </h2>
              <p className="max-w-[15rem] md:max-w-md xl:max-w-4xl truncate lg:text-xl lg:mt-5">
                {results[0].overview}{" "}
              </p>
            </div>
            <div ref={observe}>
              <Image
                priority={true}
                src={
                  `${BASE_URL}${
                    results[0].backdrop_path || results[0].poster_path
                  }` || `${BASE_URL}${results[0].poster_path}`
                }
                height={1080}
                width={1920}
                sizes={width !== undefined ? `${Math.round(width)}px` : "100vw"}
                layout="responsive"
                alt={results.title}
                quality={65}
              />
            </div>
          </div>
        </Link>
      </div>
      <div className="keen-slider__slide number-slide2">
        <Link href={`/movie/${results[1].id}`} key={results.id}>
          <div>
            <div className="absolute z-50 px-4 bottom-8 h-fit text-slate-100">
              <h2 className="text-md font-semibold w-3/4 md:text-3xl xl:text-5xl">
                {results[1].title}
              </h2>
              <p className="max-w-[15rem] md:max-w-md xl:max-w-4xl truncate lg:text-xl lg:mt-5">
                {results[1].overview}{" "}
              </p>
            </div>
            <div ref={observe}>
              <Image
                src={
                  `${BASE_URL}${
                    results[1].backdrop_path || results[1].poster_path
                  }` || `${BASE_URL}${results[1].poster_path}`
                }
                height={1080}
                width={1920}
                sizes={width !== undefined ? `${Math.round(width)}px` : "100vw"}
                alt={results.title}
                quality={65}
              />
            </div>
          </div>
        </Link>
      </div>
      <div className="keen-slider__slide number-slide3">
        <Link href={`/movie/${results[2].id}`} key={results.id}>
          <div>
            <div className="absolute z-50 px-4 bottom-8 h-fit text-slate-100">
              <h2 className="text-md font-semibold w-3/4 md:text-3xl xl:text-5xl">
                {results[2].title}
              </h2>
              <p className="max-w-[15rem] md:max-w-md xl:max-w-4xl truncate lg:text-xl lg:mt-5">
                {results[2].overview}{" "}
              </p>
            </div>
            <div ref={observe}>
              <Image
                src={
                  `${BASE_URL}${
                    results[2].backdrop_path || results[2].poster_path
                  }` || `${BASE_URL}${results[2].poster_path}`
                }
                height={1080}
                width={1920}
                sizes={width !== undefined ? `${Math.round(width)}px` : "100vw"}
                alt={results.title}
                quality={65}
              />
            </div>
          </div>
        </Link>
      </div>
      <div className="keen-slider__slide number-slide4">
        <Link href={`/movie/${results[3].id}`} key={results.id}>
          <div>
            <div className="absolute z-50 px-4 bottom-8 h-fit text-slate-100">
              <h2 className="text-md font-semibold w-3/4 md:text-3xl xl:text-5xl">
                {results[3].title}
              </h2>
              <p className="max-w-[15rem] md:max-w-md xl:max-w-4xl truncate lg:text-xl lg:mt-5">
                {results[3].overview}{" "}
              </p>
            </div>
            <Image
              src={
                `${BASE_URL}${
                  results[3].backdrop_path || results[3].poster_path
                }` || `${BASE_URL}${results[3].poster_path}`
              }
              height={1080}
              width={1920}
              sizes={width !== undefined ? `${Math.round(width)}px` : "100vw"}
              alt={results.title}
              quality={65}
            />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Slideshow;
