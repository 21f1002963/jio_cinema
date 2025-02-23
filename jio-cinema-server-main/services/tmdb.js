const axios = require("axios");

const API_KEY = process.env.TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

const TMDB_ENDPOINT = {
  // Home Page
  fetchNowPlaying: "/movie/now_playing",
  fetchTrending: `/trending/all/week`,
  fetchPopular: `/trending/all/week`,
  fetchUpcoming: `/movie/upcoming?include_video=true`,
  fetchTopRated: `/movie/top_rated?include_video=true`,

  fetchActionMovies: `/discover/movie?language=en-US&with_genres=28`,
  fetchComedyMovies: `/discover/movie?language=en-US&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?language=en-US&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?language=en-US&with_genres=10749`,
  fetchAnimeMovies: '/discover/movie?language=en-US&with_genres=16',
  fetchMovieVideos: (id) => `/movie/${id}/videos`,
  fetchMovieDetails: (id) => `/movie/${id}`,

  fetchActionTvShows: `/discover/tv?language=en-US&with_genres=10759`,
  fetchComedyTvShows: `/discover/tv?language=en-US&with_genres=35`,
  fetchMysteryTvShows: `/discover/tv?language=en-US&with_genres=9648`,
  fetchDramaTvShows: `/discover/tv?language=en-US&with_genres=18`,
  fetchCrimeTvShows: `/discover/tv?language=en-US&with_genres=80`,
  fetchTvShowVideos: (id) => `/tv/${id}/videos`,
  fetchTvShowDetails: (id) => `/tv/${id}`,
};

const tmdbApi = axios.create({
  baseURL: BASE_URL,
});

tmdbApi.interceptors.request.use(function (config) {
  config.params = config.params || {};
  config.params["api_key"] = API_KEY;
  return config;
});

module.exports = {
  TMDB_ENDPOINT,
  tmdbApi,
};
