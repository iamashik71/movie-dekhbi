import Image from "next/image";
import { useRouter } from "next/router";

const MovieCard = ({ movie }) => {
  const router = useRouter();

  const handleDetails = () => {
    router.push(`/movie/${movie.imdbID}`);
  };

  return (
    <div
      className="bg-white rounded-lg shadow-lg p-4 w-[300px] h-[480px] transition-transform transform hover:scale-105"
      onClick={handleDetails}
    >
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.png"}
        alt={movie.Title}
        width={200}
        height={300}
        className="rounded-md h-[350px] w-full object-cover mb-2"
      />
      <h3 className="text-lg font-bold mt-2 text-gray-800">{movie.Title}</h3>
      <p>{movie.Year}</p>
    </div>
  );
};

export default MovieCard;
