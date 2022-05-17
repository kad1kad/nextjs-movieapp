import Link from "next/link";
import { PlayIcon } from "@heroicons/react/outline";
const youtubeUrl = "https://www.youtube.com/watch?v=";

function TrailerButton({ trailer_id }) {
  let trailerText;

  if (trailer_id < 1) {
    trailerText = "Trailer unavailable";
  } else {
    trailerText = "Trailer";
  }
  return (
    <div className="flex items-center ">
      <Link href={`${youtubeUrl}${trailer_id}`}>
        <a className="flex items-center gap-1 px-5 py-2 transition-transform border rounded-md shadow-lg border-slate-100/50 bg-neutral-900/80 md:hover:scale-105">
          {" "}
          <PlayIcon className="inline h-5" /> {trailerText}
        </a>
      </Link>
    </div>
  );
}

export default TrailerButton;
