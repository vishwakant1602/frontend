import { createContext, useState } from "react";
import { User } from "../types";

const UserContext = createContext<{ user: User | null; addUser: (user: User) => void }>({
  user: null,
  addUser: (user: User) => {},
});
export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const addUser = (user: User) => {
    setUser(user);
  };

  return <UserContext.Provider value={{ user, addUser }}>{children}</UserContext.Provider>;
}

export default UserContext;
