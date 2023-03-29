import styled from "styled-components";

export const StyledDBLink = styled.li`
  background: ${({ filled }) => (filled ? "#252D26" : "#f2f2f2")};
  color: ${({ filled }) => (filled ? "#fff" : "#000")};

  border-radius: 20%;
  list-style: none;
  padding: 0.2vh 1.5vh;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  &:hover {
    transform: scale(1.1, 1.1);
    border: none;
  }
`;
