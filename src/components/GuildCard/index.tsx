import { PartialGuild } from "../../utils/types";
import { GuildCardDesign } from "./styles";
import { Link } from "react-router-dom";

export const GuildCard = ({ guild }: { guild: PartialGuild }) => {
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
