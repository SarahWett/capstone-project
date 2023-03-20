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
`;

export default function Navbar({ children }) {
  return <StyledList>{children}</StyledList>;
}
