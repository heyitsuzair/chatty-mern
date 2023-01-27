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
export const login = async (postData) => {
  try {
    const { data } = await axios.post(Endpoints.login, postData);
    return data;
  } catch ({ response }) {
    return response.data;
  }
};
