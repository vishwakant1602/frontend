import UserContext from "../../utils/contexts/userContext";
import { useContext, useEffect } from "react";
import { PartialGuild } from "../../utils/types";
import { Link } from "react-router-dom";
import { GuildCardDesign, GuildMenu } from "../../utils/styles/menu";

const GuildCard = ({ guild }: { guild: PartialGuild }) => {
  return (
    <GuildCardDesign>
      <li>
        <Link to={`/dashboard/${guild.id}`} style={{ textDecoration: "none" }}>
          <img src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`} alt={guild.name} />
          <span>{guild.name}</span>
          <button>Manage</button>
        </Link>
      </li>
    </GuildCardDesign>
  );
};

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
