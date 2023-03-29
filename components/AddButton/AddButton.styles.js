import styled from "styled-components";

export const StyledNavLink = styled.li`
  background: #f2f2f2;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  border-radius: 50%;
  list-style: none;
  padding: 3%;
  &:hover {
    background: #e6e4e3;
    transform: scale(1.1);
  }
`;
