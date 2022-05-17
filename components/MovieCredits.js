import Image from "next/image";

function MovieCredits({ credits }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original";

  console.log(credits);

  return (
    <section className="overflow-x-scroll scrollbar-hide">
      <div className="relative flex max-w-full gap-5 mt-5">
        {credits.slice(0, 7).map((credit) => (
          <div key={credit.cast_id} className="relative">
            <Image
              height={502 / 2.5}
              width={335 / 2.5}
              layout="fixed"
              src={`${BASE_URL}/${credit.profile_path}`}
              alt={credit.original_name}
              className="rounded-3xl"
            />
            <div className="max-w-[9rem]">
              <p className="font-semibold">{credit.original_name}</p>
              <p className="text-xs"> as {credit.character} </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MovieCredits;
