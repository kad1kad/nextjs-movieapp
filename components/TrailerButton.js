import Link from "next/link";
import { PlayIcon } from "@heroicons/react/outline";
const youtubeUrl = "https://www.youtube.com/watch?v=";

function TrailerButton({ trailer_id, buttonText }) {
  return (
    <div className="flex items-center">
      <Link href={`${youtubeUrl}${trailer_id}`}>
        <a className="flex items-center gap-1 px-5 py-2 rounded-md bg-neutral-900 ">
          {" "}
          <PlayIcon className="inline h-5" /> {buttonText}
        </a>
      </Link>
    </div>
  );
}

export default TrailerButton;
