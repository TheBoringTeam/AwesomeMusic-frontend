import React, { useState, createContext } from "react";

type Props = {
  children: React.ReactNode;
};

type UserContextType = {
  auth: boolean;
  setAuth: (value: boolean) => void;
};

const defaultUser: boolean = false;

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export const UserProvider: React.FC<Props> = ({ children }: Props) => {
  const [auth, setAuth] = useState(defaultUser);

  return (
    <UserContext.Provider value={{ auth, setAuth }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => React.useContext(UserContext);
