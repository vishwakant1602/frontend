import { PartialGuild } from "../../utils/types";
import { GuildCardDesign } from "./styles";
import { Link } from "react-router-dom";
import { UniButton } from "../../utils/styles/universal";

export const GuildCard = ({ guild }: { guild: PartialGuild }) => {
  return (
    <>
      <GuildCardDesign>
        <li>
          <img src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`} alt={guild.name} />
          <span>{guild.name}</span>
          <Link to={`/dashboard/${guild.id}`} style={{ textDecoration: "none" }}>
            <UniButton>Manage</UniButton>
          </Link>
        </li>
      </GuildCardDesign>
    </>
  );
};
