const apiKey = "AIzaSyA2xk0tdRqSCkWFnNu7k0AMLkMewQ-YrUk";
const dataBaseUrl = `https://movieweb-791f2-default-rtdb.firebaseio.com/`;
const registerURL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`;

import { request } from "./requestService.js";

export const register = async (email, password) => {
  let response = await request(registerURL, "POST", {
    email,
    password,
  });

  localStorage.setItem("auth", JSON.stringify(response));

  return response;
};
