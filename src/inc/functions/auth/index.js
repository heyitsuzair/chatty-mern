import axios from "axios";
import { Endpoints } from "../../config/endpoints";

export const signup = async (postData) => {
  try {
    const { data } = await axios.post(Endpoints.signup, postData);
    return data;
  } catch ({ response }) {
    return response.data;
  }
};
