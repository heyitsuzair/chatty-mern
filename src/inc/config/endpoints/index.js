const BASE_URL = process.env.REACT_APP_API_HOST || "http://localhost:5000/api/";
export const Endpoints = {
  // Auth
  signup: BASE_URL + "auth/signup",
  login: BASE_URL + "auth/login",

  // Contacts
  addContact: BASE_URL + "contact/add-contact",
  getContacts: BASE_URL + "contact/get-contacts",
};
