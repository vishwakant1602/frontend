import { Routes, Route } from "react-router-dom";
import { Login } from "./components/Login";
import { HomePage } from "./pages/HomePage";
import { MenuPage } from "./pages/dashboard";
import { UserProvider } from "./utils/contexts/userContext";
import UserContext from "./utils/contexts/userContext";
import { useContext } from "react";
import { GuildDashboardPage } from "./pages/dashboard/guild";
import { NotFoundPage } from "./pages/404";

function App() {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <UserProvider>
      <Routes>
        {/* Static */}
        <Route path="/" element={<HomePage />} />

        {/* Dashboard */}
        <Route path="/dashboard">
          <Route index element={<MenuPage />} />
          <Route path="@me" element={<MenuPage />} />
          <Route path=":guildId" element={<GuildDashboardPage />} />
        </Route>

        {/* Others */}
        <Route path="/auth/callback/" element={<Login />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
