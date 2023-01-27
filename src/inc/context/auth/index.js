import { createContext, useEffect, useState } from "react";

import React from "react";

export const authContext = createContext();

const AuthState = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(localStorage.getItem("chatty-user"));
  }, []);

  return (
    <authContext.Provider value={{ setUser, user }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthState;
