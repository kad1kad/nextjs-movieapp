const API_KEY = process.env.API_KEY;
const BASE_URL = "https://image.tmdb.org/t/p/original";
import Image from "next/image";
import MovieInfo from "../../components/MovieInfo";
import SimilarMovies from "../../components/SimilarMovies";

function Movie({ movieData, trailerData, results }) {
  console.log(movieData);
  return (
    <div className="relative h-screen overflow-x-hidden">
      <Image
        src={
          `${BASE_URL}${movieData.backdrop_path || movieData.poster_path}` ||
          `${BASE_URL}${movieData.poster_path}`
        }
        layout="fill"
        objectFit="cover"
        alt={movieData.title}
        quality={75}
      />

      <MovieInfo
        title={movieData.title}
        origTitle={movieData.original_title}
        movieDescription={movieData.overview}
        trailerId={trailerData.results[0]?.key}
        rating={movieData.vote_average}
        genres={movieData.genres}
        year={movieData.release_date}
        runtime={movieData.runtime}
      >
        <h2 className="mt-20 text-2xl ">Similar Movies</h2>
        <SimilarMovies results={results} />
      </MovieInfo>
    </div>
  );
}

export default Movie;

export const getServerSideProps = async (context) => {
  const [movieDataRes, trailerDataRes, similarMoviesRes] = await Promise.all([
    fetch(
      `https://api.themoviedb.org/3/movie/${context.query.id}?api_key=${API_KEY}&language=en-US`
    ),
    fetch(
      `https://api.themoviedb.org/3/movie/${context.query.id}/videos?api_key=${API_KEY}&language=en-US`
    ),
    fetch(
      `https://api.themoviedb.org/3/movie/${context.query.id}/similar?api_key=${API_KEY}&language=en-US`
    ),
  ]);

  const [movieData, trailerData, similarMovies] = await Promise.all([
    movieDataRes.json(),
    trailerDataRes.json(),
    similarMoviesRes.json(),
  ]);

  return {
    props: { movieData, trailerData, results: similarMovies.results },
  };
};
