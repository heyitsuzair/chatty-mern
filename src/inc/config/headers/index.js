const token = localStorage.getItem("chatty-user");

export const authHeader = {
  headers: {
    Authorization: token,
  },
};
