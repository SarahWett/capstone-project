import styled from "styled-components";
import Link from "next/link";

export const DashCardsContainer = styled.div`
  padding: 5vw;
  padding-top: 1vh;
  height: 70vh;
  background: rgba(53, 95, 151, 0.16);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(9.7px);
  border: 1px solid rgba(53, 95, 151, 0.15);
`;

export const DashboardCard = styled.div`
  text-align: center;
  text-decoration: none;
  color: #fff;
  font-family: "Roboto", sans-serif;
  letter-spacing: 8px;
  line-height: 2.5rem;
  border-bottom: 1px solid #fff;
  width: 85vw;
  height: 20vh;
  margin: 2vh 1vh 1vh 1vh;
  padding: 5vh;
  background: rgba(128, 131, 115, 0.26);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(9.9px);
  border: 1px solid rgba(53, 95, 151, 0.15);
  &:hover {
    background: rgba(206, 164, 80, 0.6);
    transition: background-color 0.5s ease;
  }
  &:active {
    background: rgb(37, 45, 38);
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
