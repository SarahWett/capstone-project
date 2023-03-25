import styled from "styled-components";

export const StyledInput = styled.label`
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    to bottom,
    rgb(230, 228, 227, 0.9),
    rgb(204, 161, 73) 71%
  );
  box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,
    rgba(94, 58, 58, 0.5) -3px -3px 6px 1px inset;
  margin: 1vh 0;
  padding: 2vw;
  text-align: center;
  border-radius: 20px;
  width: 25vw;
  &:active,
  &:checked {
    background: #ff675c;
  }
`;
