const API_KEY = process.env.API_KEY;
const BASE_URL = "https://image.tmdb.org/t/p/original";
import Image from "next/image";
import TrailerButton from "../../components/TrailerButton";

function Movie({ movieData, trailerData }) {
  let trailerText;

  if (trailerData.results < 1) {
    trailerText = "No Trailer available";
  } else {
    trailerText = "Trailer";
  }

  return (
    <div className="relative h-screen">
      <Image
        src={
          `${BASE_URL}${movieData.backdrop_path || movieData.poster_path}` ||
          `${BASE_URL}${movieData.poster_path}`
        }
        layout="fill"
        objectFit="cover"
        alt={movieData.title}
      />
      <div className="absolute top-0 bg-gradient-to-b from-slate-900 via-slate-800/50  p-5 w-screen text-gray-100">
        <div className="my-5">
          <h1 className="text-3xl ">{movieData.title}</h1>
          <span>{movieData.original_title}</span>
        </div>
        <p className="lg:w-1/2 xl:w-1/3">{movieData.overview}</p>
        <TrailerButton
          trailer_id={trailerData.results[0]?.key}
          buttonText={trailerText}
        />
      </div>
    </div>
  );
}

export default Movie;

export const getServerSideProps = async (context) => {
  const [movieDataRes, trailerDataRes] = await Promise.all([
    fetch(
      `https://api.themoviedb.org/3/movie/${context.query.id}?api_key=${API_KEY}&language=en-US`
    ),
    fetch(
      `https://api.themoviedb.org/3/movie/${context.query.id}/videos?api_key=${API_KEY}&language=en-US`
    ),
  ]);

  const [movieData, trailerData] = await Promise.all([
    movieDataRes.json(),
    trailerDataRes.json(),
  ]);

  return { props: { movieData, trailerData } };
};
