import { Badge } from "@chakra-ui/react";

function GenreYearRuntimeBadge({ genres, releaseYear, runtime }) {
  return (
    <div className="flex flex-wrap gap-5 mt-5 text-sm font-light tracking-wide">
      {genres.map((genre) => (
        <Badge variant="subtle" colorScheme="green" key={genre.id}>
          {genre.name}
        </Badge>
      ))}

      <Badge variant="outline" colorScheme="whatsapp">
        {releaseYear}
      </Badge>
      <Badge variant="outline" colorScheme="whatsapp">
        {runtime} min
      </Badge>
    </div>
  );
}

export default GenreYearRuntimeBadge;
