import { Routes, Route } from "react-router-dom";
import { Login } from "./components/Login";
import { HomePage } from "./pages/HomePage";
import { MenuPage } from "./pages/MenuPage";
import { UserProvider } from "./utils/contexts/userContext";
import UserContext from "./utils/contexts/userContext";
import { useContext } from "react";

function App() {
  const { user } = useContext(UserContext);
  console.log("printing user in nowhere");
  console.log(user);

  return (
    <UserProvider>
    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/auth/callback/" element={<Login />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
