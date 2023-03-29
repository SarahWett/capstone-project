import styled from "styled-components";

export const StyledTextarea = styled.textarea`
  width: 95vw;
  padding: 5vw;
  margin: 5vw;
  border-radius: 20px;
  box-shadow: rgba(105, 74, 111, 0.3) 0px 0px 0px 3px;
`;

export const StyledEditFormContainer = styled.div`
  width: 360px;
  height: 150vh400px;
  padding: 3vw;
  border-radius: 10px;
  box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.41);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

export const StyledTagsInput = styled.label`
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    to bottom,
    rgb(230, 228, 227, 0.7),
    rgb(204, 161, 73) 61%
  );
  box-shadow: rgb(230, 228, 227) 3px 3px 6px 0px inset,
    rgba(94, 58, 58, 0.5) -3px -3px 6px 1px inset;
  color: rgb(53, 4, 0);
  margin: 1vh 0;
  padding: 2vw;
  text-align: center;
  border-radius: 20px;
  width: 25vw;
  &:active,
  &:checked {
    background: #FF675C;
    color:rgb(210, 200, 199)
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(8.7px);
    border: 1px solid rgba(184, 61, 141, 0.23);
  }
 
`;

export const StyledHeading = styled.h1`
  display: grid;
  place-items: center;
  padding: 1vh 5vh 1vh 5vh;
  margin: 0;
  margin-top: 4vh;
  margin-bottom: 2vh;
  font-size: 1.5em;
  color: #252d26;
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 2vh 5vh 2vh 5vh;
  line-height: 5vh;
`;

export const StyledDoneButton = styled.button`
  border: none;
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  padding: 22px 35px;
  width: 40vw;
  height: 8vh;
  border-radius: 100px;
  color: #e6e4e3;
  background: -webkit-linear-gradient(
    rgb(37, 45, 38) 0%,
    rgb(151, 154, 135) 84%
  );
  box-shadow: 2px 4px 8px 3px rgba(107, 110, 148, 0.8);
  cursor: pointer;
  position: relative;
  z-index: 1;
  &::after {
    content: "";
    position: absolute;
    width: 36vw;
    height: 62%;
    border-radius: 80px;
    background: linear-gradient(
      to bottom,
      rgba(215, 180, 112, 0.7),
      rgba(37, 45, 38, 0.1) 61%
    );
    top: 2px;
    left: 6px;
  }
  &:hover {
    background: linear-gradient(
      to bottom,
      rgba(215, 180, 112, 0.7),
      rgba(37, 45, 38, 0.1) 61%
    );
    color: rgb(53, 4, 0);
    box-shadow: 1px 2px 4px 2px rgba(107, 110, 148, 0.8);
  }
  &:active {
    background: #252d26;
    color: #e6e4e3;
    box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px,
      rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
  }
`;

export const StyledSmileySection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4vh;
  align-items: center;
  margin-left: 8vw;
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

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: row;
  gap: 5vw;
  align-items: center;
  align-self: flex-start;
  color: #252d26;
`;
