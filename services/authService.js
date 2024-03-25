const apiKey = "AIzaSyA2xk0tdRqSCkWFnNu7k0AMLkMewQ-YrUk";
import { request } from "./requestService.js";
const api = {
  register: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`,
  login: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,
};

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

export const getUserData = () => {
  try {
    let data = JSON.parse(localStorage.getItem("auth"));
    return {
      isAuthenticated: Boolean(data.idToken),
      email: data.email,
    };
  } catch (error) {
    return {
      isAuthenticated: false,
      email: "",
    };
  }
};

export const logout = async () => {
  localStorage.setItem("auth", "");
};
