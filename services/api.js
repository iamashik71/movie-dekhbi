import axios from "axios";
import { searchMoviesEndpoint, movieDetailsEndpoint } from "./apiEndpoints";

// Search for movies
export const searchMovies = async (query) => {
  const { data } = await axios.get(searchMoviesEndpoint(query));
  if (data.Response === "False") {
    throw new Error(data.Error); // Handle error from the API
  }
  return data.Search; // Return movie list
};

// Get details for a specific movie by ID
export const getMovieDetails = async (id) => {
  const { data } = await axios.get(movieDetailsEndpoint(id));
  if (data.Response === "False") {
    throw new Error(data.Error); // Handle error from the API
  }
  return data; // Return movie details
};
