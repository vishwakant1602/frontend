import UserContext from "../utils/contexts/userContext";
import { useContext, useEffect } from "react";
import { Guild } from "../utils/types";

export const MenuPage = () => {
  const { user } = useContext(UserContext);

  useEffect(() => {}, [user]);

  return (
    <div>
      {user ? (
        <ul>
          {user.guilds.map((guild: Guild) => (
            <li key={guild.id}>{guild.name}</li>
          ))}
        </ul>
      ) : (
        <p>You are not logged in.</p>
      )}
    </div>
  );
};
