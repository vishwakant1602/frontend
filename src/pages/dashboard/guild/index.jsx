import { useParams } from "react-router-dom";

export function GuildDashboardPage() {
  const { guildId } = useParams();

  return (
    <div>
      <h1>Guild Dashboard - {guildId}</h1>
    </div>
  );
}
