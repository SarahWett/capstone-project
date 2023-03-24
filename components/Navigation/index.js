import styled from "styled-components";

const StyledList = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 16vh;
  position: fixed;
  bottom: 0;
  font-size: 3vh;
  padding: 3vh;
  background-color: #d7d4ed;
  z-index: 100;
  margin: auto;
  align-items: center;
  color: #172e4f;
  background: -webkit-linear-gradient(#404f43 0%, #e6e4e3 84%);
  box-shadow: 2px 4px 8px 3px rgba(107, 110, 148, 0.8);
`;

export default function Navbar({ children }) {
  return <StyledList>{children}</StyledList>;
}
