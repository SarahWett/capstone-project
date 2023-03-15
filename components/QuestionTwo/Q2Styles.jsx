import styled from "styled-components";

export const StyledInput = styled.label`
  background: rgba(184, 61, 141, 0.51);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8.7px);
  border: 1px solid rgba(184, 61, 141, 0.23);
  margin: 1vh 0;
  padding: 2vw;
  text-align: center;
  border-radius: 20px;
  width: 25vw;
  &:active,
  &:focus,
  &:after {
    background: rgba(184, 61, 141, 0.87);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(8.7px);
    border: 1px solid rgba(184, 61, 141, 0.23);
  }
`;
