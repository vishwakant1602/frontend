import { useParams } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { fetchGuildFromAPI } from "../../../utils/api";
import { Guild } from "../../../utils/types";
import { DashboardNav } from "../../../components/dashboard/Nav";
import { DashboardSidebar } from "../../../components/dashboard/Sidebar";
import { HomeTab } from "../../../components/dashboard/Home";
import { GuildDashboardContainer } from "./styles";

export function GuildDashboardPage() {
  const { guildId = "" } = useParams();

  const [hasFetched, setHasFetched] = useState(false);
  const fetchDataAndUpdateState = useCallback(async () => {
    const fetchedGuild: Guild = await fetchGuildFromAPI(guildId, true);
    console.log(fetchedGuild);
  }, [guildId]);

  useEffect(() => {
    if (!hasFetched) {
      setHasFetched(true);
      fetchDataAndUpdateState();
    }
  }, [hasFetched, fetchDataAndUpdateState]);

  return !hasFetched ? (
    <div>Loading...</div>
  ) : (
    <GuildDashboardContainer>
      <DashboardNav />
      <DashboardSidebar />
      <HomeTab />
    </GuildDashboardContainer>
  );
}
