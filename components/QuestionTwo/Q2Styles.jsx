import styled from "styled-components";

export const StyledInput = styled.label`
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.7),
    rgba(73, 12, 61, 0.2) 61%
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
    background: rgba(184, 61, 141, 0.87);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(8.7px);
    border: 1px solid rgba(184, 61, 141, 0.23);
  }
`;
