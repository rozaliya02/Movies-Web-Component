import { request } from "./requestService.js";
const dataBaseUrl = `https://movieweb-791f2-default-rtdb.firebaseio.com/`;
const api = {
  movies: `${dataBaseUrl}/movies.json`,
};

export const getAllMovies = async searchText => {
  let res = await request(api.movies, "GET");
  return Object.keys(res)
    .map(key => ({ key, ...res[key] }))
    .filter(x => !searchText || searchText == x.title);
};

export const getOneMovie = async id => {
  let res = await request(`${dataBaseUrl}/movies/${id}.json`, "GET");
  return res;
};
