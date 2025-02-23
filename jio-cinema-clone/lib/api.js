import axios from "axios";

export const ENDPOINT = {
  login: "/auth/login",
  signup: "/auth/signup",
  user: "/user",
  logout: "/auth/logout",
  forgetpassword: "/auth/forgetpassword",
  resetPassword: "/auth/resetPassword",
  payment: "/payment/order",
  updatePremium: "/payment/update-premium-access",

  addToWishlist: "/user/wishlist",
  getWishlist: "/user/wishlist",

  discoverNowPlaying: "/discover/now-playing",
  discoverTrending: "/discover/trending",
  discoverTopRated: "/discover/top-rated",
  discoverUpcoming: "/discover/upcoming",

  fetchActionMovies: `/movies/action`,
  fetchComedyMovies: `/movies/comedy`,
  fetchHorrorMovies: `/movies/horror`,
  fetchRomanceMovies: `/movies/romance`,
  fetchAnimeMovies: `/movies/anime`,

  getMovieDetails: (id) => `/movies/details?id=${id}`,

  fetchActionTvShows: `/tv/action`,
  fetchComedyTvShows: `/tv/comedy`,
  fetchCrimeTvShows: `/tv/crime`,
  fetchDramaTvShows: `/tv/drama`,
  fetchMysteryTvShows: `/tv/mystery`,
  getTvShowsDetails: (id) => `/tv/details?id=${id}`,

  fetchAllStreamingVideos: `/video`,
  fetchStreamingVideo: (id) => `/video?id=${id}`,
  fetchVideoThumbnail: (id) => `/video/thumbnail?videoId=${id}`,
};

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const media = (path) => `https://image.tmdb.org/t/p/original` + path;

export const getStreamingVideoThumbnail = (id) =>
  API_BASE_URL + ENDPOINT.fetchVideoThumbnail(id);

export const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});
