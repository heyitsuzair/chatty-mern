import axios from "axios";
import { authHeader } from "../../config";
import { Endpoints } from "../../config/endpoints";

export const addContact = async (postData, token) => {
  authHeader.headers.Authorization = token;

  try {
    const { data } = await axios.post(
      Endpoints.addContact,
      postData,
      authHeader
    );
    return data;
  } catch ({ response }) {
    return response.data;
  }
};
export const getContacts = async (token) => {
  authHeader.headers.Authorization = token;
  try {
    const { data } = await axios.get(Endpoints.getContacts, authHeader);
    return data;
  } catch ({ response }) {
    return response.data;
  }
};
