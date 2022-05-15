import Link from "next/link";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import Nav from "./Nav";

const BASE_URL = "https://image.tmdb.org/t/p/original";

function Header({ results }) {
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
  console.log(results);
  return (
    <header className="relative w-screen">
      {/* MOVIE INFO */}

      <nav className="absolute z-30 justify-start w-screen px-4 bg-gradient-to-b from-slate-800 h-1/2">
        <div className="absolute top-0 flex items-center mt-3">
          <Link href="/">
            <a>
              <h1 className="top-0 z-30 tracking-widest text-transparent md:text-4xl sm:text-2xl bg-clip-text bg-gradient-to-r from-indigo-500 via-cyan-700 to-indigo-700">
                MOVIE DISC
              </h1>
            </a>
          </Link>

          <Nav />
        </div>
      </nav>

      {/* SLIDER */}

      <div ref={sliderRef} className="keen-slider max-h-[70vh] cursor-pointer">
        <div className="keen-slider__slide number-slide1">
          <Link href={`/movie/${results[0].id}`} key={results.id}>
            <div>
              <div className="absolute z-50 px-4 bottom-8 h-fit text-slate-100">
                <h2 className="text-4xl">{results[0].title}</h2>
                <p className="max-w-sm truncate ">{results[0].overview} </p>
              </div>
              <Image
                src={
                  `${BASE_URL}${
                    results[0].backdrop_path || results[0].poster_path
                  }` || `${BASE_URL}${results[0].poster_path}`
                }
                height={1080}
                width={1920}
                alt={results.title}
              />
            </div>
          </Link>
        </div>
        <div className="keen-slider__slide number-slide2">
          <Link href={`/movie/${results[1].id}`} key={results.id}>
            <div>
              <div className="absolute z-50 px-4 bottom-8 h-fit text-slate-100">
                <h2 className="text-4xl">{results[1].title}</h2>
                <p className="max-w-sm truncate ">{results[1].overview} </p>
              </div>
              <Image
                src={
                  `${BASE_URL}${
                    results[1].backdrop_path || results[1].poster_path
                  }` || `${BASE_URL}${results[1].poster_path}`
                }
                height={1080}
                width={1920}
                alt={results.title}
              />
            </div>
          </Link>
        </div>
        <div className="keen-slider__slide number-slide3">
          <Link href={`/movie/${results[2].id}`} key={results.id}>
            <div>
              <div className="absolute z-50 px-4 bottom-8 h-fit text-slate-100">
                <h2 className="text-4xl">{results[2].title}</h2>
                <p className="max-w-sm truncate ">{results[2].overview} </p>
              </div>
              <Image
                src={
                  `${BASE_URL}${
                    results[2].backdrop_path || results[2].poster_path
                  }` || `${BASE_URL}${results[2].poster_path}`
                }
                height={1080}
                width={1920}
                alt={results.title}
              />
            </div>
          </Link>
        </div>
        <div className="keen-slider__slide number-slide4">
          <Link href={`/movie/${results[3].id}`} key={results.id}>
            <div>
              <div className="absolute z-50 px-4 bottom-8 h-fit text-slate-100">
                <h2 className="text-4xl">{results[3].title}</h2>
                <p className="max-w-sm truncate ">{results[3].overview} </p>
              </div>
              <Image
                src={
                  `${BASE_URL}${
                    results[3].backdrop_path || results[3].poster_path
                  }` || `${BASE_URL}${results[3].poster_path}`
                }
                height={1080}
                width={1920}
                alt={results.title}
              />
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
