import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
const AuthContext = createContext();


const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  let navigate = useNavigate();

  const loginAction = async (input) => {
    try {
      const response = await axios.get("https://todo-server-mu-nine.vercel.app/users");

      const users = response.data;
      console.log(users);

      const user = users.filter((user) => user.email === input.email);
     
      if (user) {
        
        setUser(user[0].user);
        setToken(user[0].token);
        console.log(user[0].token);
        localStorage.setItem("site", user[0].token);
        navigate("/dashboard");
        return;
      }
      throw new Error(res.message);
    } catch (err) {
      console.error(err);
    }
  };

  const logOut = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("site");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ token, user, loginAction, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
