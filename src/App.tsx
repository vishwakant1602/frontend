import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/Login";
import { HomePage } from "./pages/HomePage";
import { MenuPage } from "./pages/dashboard";
import { UserProvider } from "./utils/contexts/userContext";
import UserContext from "./utils/contexts/userContext";
import { useContext } from "react";
import { GuildDashboardPage } from "./pages/dashboard/guild";
import { NotFoundPage } from "./pages/404";
import { TermsPage } from "./pages/others/terms";
import { RefundPage } from "./pages/others/refund";
import { PrivacyPage } from "./pages/others/privacy";
import { AboutPage } from "./pages/others/about";
import Footer from "./components/Footer"; // Ensure this is a default import

function App() {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <UserProvider>
      <div>
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
          <Route path="/auth/callback" element={<LoginPage />} />
          <Route path="/terms-of-use" element={<TermsPage />} />
          <Route path="/refund-policy" element={<RefundPage />} />
          <Route path="/privacy-policy" element={<PrivacyPage />} />
          <Route path="/about" element={<AboutPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer /> {/* Footer added here */}
      </div>
    </UserProvider>
  );
}

export default App;
