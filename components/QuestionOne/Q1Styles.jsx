import styled from "styled-components";

export const StyledSmileyInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4vh;
  align-items: center;
  margin-left: 4vw;
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: row;
  gap: 5vw;
  line-height: 3vh;
  align-items: center;
  align-self: flex-start;
  &.selected {
    background-color: rgba(226, 226, 223, 0.8);
    border-radius: 15px;
    padding: 1vh;
    width: 50vw;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }
`;

export const StyledInput = styled.input`
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;
