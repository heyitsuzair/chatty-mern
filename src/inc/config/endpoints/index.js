const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000/api/";
export const Endpoints = {
  // Auth
  signup: BASE_URL + "auth/signup",
  login: BASE_URL + "auth/login",
};
