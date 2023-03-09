import styled from "styled-components";

export const GuildMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 150px;

  h2 {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }
`;

export const GuildCardDesign = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
  border: 1px solid #f2f2f2;
  border-radius: 5px;

  &:hover {
    background-color: #f2f2f2;
  }

  img {
    width: 40px;
    height: 40px;
    margin-right: 10px;
    border-radius: 50%;
  }

  span {
    font-size: 1.25rem;
    font-weight: bold;
    color: white;
  }
`;
