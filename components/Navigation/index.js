import styled from "styled-components";
import NavItems from "../NavItems";

const StyledList = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 100%;
  position: fixed;
  bottom: 0;
  font-size: 3vh;
  padding: 3vh;
  background-color: whitesmoke;
  z-index: 100;
  margin: auto;
  align-items: center;
`;

export default function Navbar() {
  return (
    <StyledList>
      <NavItems />
    </StyledList>
  );
}
