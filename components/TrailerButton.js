import Link from "next/link";
const youtubeUrl = "https://www.youtube.com/watch?v=";

function TrailerButton({ trailer_id, buttonText }) {
  return (
    <div className="mt-6">
      <Link href={`${youtubeUrl}${trailer_id}`}>
        <a className="bg-neutral-900 px-5 py-2 rounded-md">{buttonText}</a>
      </Link>
    </div>
  );
}

export default TrailerButton;
