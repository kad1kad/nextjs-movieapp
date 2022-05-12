const API_KEY = process.env.API_KEY;
const BASE_URL = "https://image.tmdb.org/t/p/original";
import Image from "next/image";

function Movie(movieData) {
  console.dir(movieData);
  return (
    <div className="relative">
      <Image
        src={
          `${BASE_URL}${movieData.backdrop_path || movieData.poster_path}` ||
          `${BASE_URL}${movieData.poster_path}`
        }
        height={1080}
        width={1920}
        layout="responsive"
        alt={movieData.title}
      />
      <div className=" absolute bottom-0 bg-gradient-to-t from-slate-900 p-5 w-screen">
        <div className="my-5">
          <h1 className="text-3xl ">{movieData.title}</h1>
          <span>{movieData.original_title}</span>
        </div>

        <h2>{movieData.overview}</h2>
        <p>test</p>
      </div>
    </div>
  );
}

export default Movie;

export async function getServerSideProps(context) {
  console.log(context.query.id);

  const request = await fetch(
    `https://api.themoviedb.org/3/movie/${context.query.id}?api_key=${API_KEY}&language=en-US`
  );
  const movieData = await request.json();

  return {
    props: movieData,
  };
}
