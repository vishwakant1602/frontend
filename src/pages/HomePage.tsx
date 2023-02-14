import { FaDiscord, FaQuestionCircle } from "react-icons/fa";
import { MainButton, HomePageStyle } from "../utils/styles";
import UserContext from "../utils/contexts/userContext";
import React, { useContext, useEffect } from "react";

export const HomePage = () => {
  const redirect = () => {
    window.location.href = "http://localhost:3001/auth/login";
  };

  const { user } = useContext(UserContext);

  useEffect(() => {
    console.log("printing user in home page");
    console.log(user);
  }, [user]);

  return (
    <HomePageStyle>
      <div></div>
      <div>
        <MainButton onClick={redirect}>
          <FaDiscord size={45} color="5865F2" />
          <p style={{ fontSize: "20px" }}>Login With Discord</p>
        </MainButton>
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
