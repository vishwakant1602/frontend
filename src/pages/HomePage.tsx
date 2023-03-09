import { FaDiscord, FaQuestionCircle } from "react-icons/fa";
import { MainButton, HomePageStyle } from "../utils/styles";
import UserContext from "../utils/contexts/userContext";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const { user } = useContext(UserContext);

  const history = useNavigate();
  useEffect(() => {}, [user]);

  const handleRedirect = () => {
    if (user) {
      history("/dashboard");
    } else {
      window.location.href = `${process.env.REACT_APP_API_URL}/auth/login`;
    }
  };

  return (
    <HomePageStyle>
      <div></div>
      <div>
        {!user ? (
          <MainButton onClick={handleRedirect}>
            <FaDiscord size={45} color="5865F2" />
            <p style={{ fontSize: "20px" }}>Login With Discord</p>
          </MainButton>
        ) : (
          <MainButton onClick={handleRedirect}>
            <FaDiscord size={45} color="5865F2" />
            <p style={{ fontSize: "20px" }}>Open Dashboard</p>
          </MainButton>
        )}

        <MainButton>
          <FaQuestionCircle size={45} />
          <p style={{ fontSize: "20px" }}>Support Server</p>
        </MainButton>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "450px",
        }}
      >
        <span>Privacy Policy</span>
        <span>Terms of Service</span>
        <span>Contact Us</span>
      </div>
    </HomePageStyle>
  );
};
