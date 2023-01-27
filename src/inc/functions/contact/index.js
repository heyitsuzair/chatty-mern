import axios from "axios";
import { authHeader } from "../../config";
import { Endpoints } from "../../config/endpoints";

export const addContact = async (postData) => {
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
