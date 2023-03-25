import styled from "styled-components";

export const StyledHomeLink = styled.li`
  background: ${({ filled }) => (filled ? "#252D26" : "#f2f2f2")};
  color: ${({ filled }) => (filled ? "#fff" : "#000")};
  border: 1px solid #fff;
  border-radius: 20%;
  list-style: none;
  padding: 0.2vh 1.5vh;
  &:hover {
    transform: scale(1.1, 1.1);
    border: none;
  }
`;
