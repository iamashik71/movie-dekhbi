import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { getMovieDetails } from "@/services/api"; // Ensure this function exists
import { QueryKeys } from "@/services/queryKeys";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import Link from "next/link";

const MovieDetails = () => {
  const router = useRouter();
  const { id } = router.query; // Dynamic ID from the URL

  // Use useQuery to fetch movie details based on the ID
  const {
    data: movie,
    isLoading,
    error,
  } = useQuery({
    queryKey: [QueryKeys.MOVIE_DETAILS, id], // Query key
    queryFn: () => getMovieDetails(id), // Fetch function
    enabled: !!id, // Ensure the query runs only when an ID is available
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  console.log("specific movie", movie);

  return (
    <div className={`max-w-screen-xl mx-auto p-5`}>
      <Link href="/" className="flex items-center gap-4 group">
        <IoChevronBackCircleOutline
          size={32}
          className="transition-transform duration-300 group-hover:scale-125"
        />
        <span className="hidden md:group-hover:inline-block transition-opacity duration-300 opacity-0 group-hover:opacity-100 text-2xl font-medium">
          Back to home
        </span>
      </Link>

      {movie && (
        <div className="flex flex-col items-center py-6 mt-4">
          <img
            src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.png"}
            alt={movie.Title}
            width={800}
            className="rounded-lg shadow-lg mb-4"
          />
          <div className="max-w-[800px]">
            <h1 className="text-3xl font-bold mb-2">{movie.Title}</h1>
            <p className="text-lg text-gray-600 mb-4">{movie.Year}</p>
            <p className="text-lg">{movie.Plot}</p>
            <div className="mt-4">
              <span className="font-bold">Director:</span> {movie.Director}
            </div>
            <div className="">
              <span className="font-bold">Actors:</span> {movie.Actors}
            </div>
            <div>
              <span className="font-bold">Genre:</span> {movie.Genre}
            </div>
            <div>
              <span className="font-bold">Awards:</span> {movie.Awards}
            </div>
            <div>
              <span className="font-bold">Country:</span> {movie.Country}
            </div>
            <div>
              <span className="font-bold">Language:</span> {movie.Language}
            </div>
            <div>
              <span className="font-bold">IMDB Rating:</span> {movie.imdbRating}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
