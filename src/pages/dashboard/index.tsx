import UserContext from "../../utils/contexts/userContext";
import { useContext, useEffect } from "react";
import { PartialGuild } from "../../utils/types";
import { GuildMenu } from "../../components/GuildCard/styles";
import { GuildCard } from "../../components/GuildCard";

export const MenuPage = () => {
  const { user } = useContext(UserContext);

  useEffect(() => {}, [user]);

  return (
    <GuildMenu>
      <h2>Please select a server:</h2>
      {user ? (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {user.guilds.map((guild: PartialGuild) => (
            <GuildCard guild={guild} key={guild.id} />
          ))}
        </ul>
      ) : (
        <p>You are not logged in.</p>
      )}
    </GuildMenu>
  );
};
