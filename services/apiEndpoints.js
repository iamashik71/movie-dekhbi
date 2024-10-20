const API_KEY = process.env.NEXT_PUBLIC_OMDB_API_KEY;

export const OMDB_API_BASE_URL = "https://www.omdbapi.com/";

export const searchMoviesEndpoint = (query) =>
  `${OMDB_API_BASE_URL}?apikey=${API_KEY}&s=${query}`;

export const movieDetailsEndpoint = (id) =>
  `${OMDB_API_BASE_URL}?apikey=${API_KEY}&i=${id}`;
