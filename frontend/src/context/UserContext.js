import jwtDecode from "jwt-decode";
import React, { createContext } from "react";
import { useState } from "react";
import { getToken } from "../utils/AuthUtil";

const UserProviderContext = createContext(undefined);
const UserContext = createContext(undefined);
const UserProvider = ({ children }) => {
  const [UserDetails, setUserDetails] = useState({
    AuthToken: getToken(),
    loggedIn: getToken() ? true : false,
    role: getToken() == null ? "" : jwtDecode(getToken()).role,
  });
  console.log(UserDetails);
  return (
    <UserContext.Provider value={UserDetails}>
      <UserProviderContext.Provider value={setUserDetails}>
        {children}
      </UserProviderContext.Provider>
    </UserContext.Provider>
  );
};

export { UserProvider, UserProviderContext, UserContext };
