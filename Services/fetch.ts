import { SearchMoviesResult, Movie } from "../Model/movieModel";

const baseURL = "https://api.themoviedb.org/3";
const apiKey = process.env["NEXT_PUBLIC_API_KEY"];

export async function fetchMovies(search: string): Promise<SearchMoviesResult> {
  return fetch(
    `${baseURL}/search/movie?api_key=${apiKey}&language=fr-FR&query=${search}&page=1&include_adult=false`,
    {
      method: "GET",
    }
  ).then(async (res) => await res.json()) as Promise<SearchMoviesResult>;
}

export async function fetchMovie(id: string): Promise<Movie> {
  return fetch(`${baseURL}/movie/${id}?api_key=${apiKey}&language=fr-FR`, {
    method: "GET",
  }).then(async (res) => await res.json()) as Promise<Movie>;
}
