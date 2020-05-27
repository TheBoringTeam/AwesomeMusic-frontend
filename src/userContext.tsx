import React, { useState, createContext, useEffect } from "react";
import checkUser from "./services/api/checkUser";

interface IUser {
  guest: boolean;
  username?: string | undefined;
  email?: string | undefined;
}

type Props = {
  children: React.ReactNode;
};

type UserContextType = {
  auth: IUser;
  setAuth: (value: IUser) => void;
};

const defaultUser: IUser = {
  guest: true,
};

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export const UserProvider: React.FC<Props> = ({ children }: Props) => {
  const [auth, setAuth] = useState(defaultUser);

  useEffect(() => {
    console.log("I an");
    checkUser(setAuth);
  }, []);

  return (
    <UserContext.Provider value={{ auth, setAuth }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => React.useContext(UserContext);
