import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "./components/Login";
import { HomePage } from "./pages/HomePage";
import { MenuPage } from "./pages/MenuPage";
import { GuildContext } from "./utils/contexts/GuildContext";

function App() {
  const [guildId, setGuildId] = useState("");
  const updateGuildId = (id: string) => setGuildId(id);

  return (
    <GuildContext.Provider value={{ guildId, updateGuildId }}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/auth/callback/" element={<Login />} />
      </Routes>
    </GuildContext.Provider>
  );
}

export default App;
