const apiKey = "AIzaSyA2xk0tdRqSCkWFnNu7k0AMLkMewQ-YrUk";

const api = {
  register: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`,
  login: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,
};

import { request } from "./requestService.js";

export const register = async (email, password) => {
  let response = await request(api.register, "POST", {
    email,
    password,
  });

  localStorage.setItem("auth", JSON.stringify(response));

  return response;
};

export const login = async (email, password) => {
  let response = await request(api.login, "POST", {
    email,
    password,
  });

  localStorage.setItem("auth", JSON.stringify(response));

  return response;
};
