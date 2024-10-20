import localFont from "next/font/local";
import { useQuery } from "@tanstack/react-query";
import { getAllMovies, searchMovies } from "@/services/api"; // Ensure your API functions are correct
import MovieCard from "@/components/features/MovieCard";
import SearchBar from "@/components/features/SearchBar";
import { QueryKeys } from "@/services/queryKeys";
import { useState } from "react";
import { useRouter } from "next/router";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("Batman"); // Default search term

  // Fetch movies using React Query
  const {
    data: movies,
    error,
    isLoading,
  } = useQuery({
    queryKey: [QueryKeys.MOVIES, searchTerm],
    queryFn: () => searchMovies(searchTerm), // Call your search function with the search term
    enabled: !!searchTerm, // Only fetch if searchTerm is not empty
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: 1,
  });

  // Handle search functionality
  const handleSearch = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
  };

  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} font-[family-name:var(--font-geist-sans)] bg-gray-50`}
    >
      <main className="max-w-screen-lg mx-auto h-svh p-5">
        <div className="py-6 flex flex-col gap-6 items-center justify-center">
          <h1 className="text-5xl font-bold">কি মুভি দেখবি?</h1>
          <SearchBar onSearch={handleSearch} />
        </div>

        {isLoading && <div className="text-center">Loading...</div>}
        {error && (
          <div className="text-center text-red-500">Error: {error.message}</div>
        )}

        <div className="flex justify-between flex-wrap gap-6 py-6">
          {movies?.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      </main>
    </div>
  );
}
