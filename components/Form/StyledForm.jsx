import styled from "styled-components";

export const StyledForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledFormContainer = styled.div`
  width: 360px;
  height: 400px;
  border-radius: 8px;
  box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  background: rgba(140, 144, 122, 0.5);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
  border: 1px solid rgb(230, 228, 227);
`;

export const StyledHeader = styled.h1`
  display: grid;
  place-items: center;
  padding: 1vh 5vh 1vh 5vh;
  margin: 0;
  color: #252d26;
`;

export const StyledProgressBar = styled.div`
  width: 375px;
  height: 10px;
  background-color: white;
  margin-bottom: 50px;
`;

export const StyledProgress = styled.div`
  width: 33.3%;
  height: 100%;
  border-radius: 10px;
  background: linear-gradient(
    to bottom,
    rgba(230, 228, 227, 0.7),
    rgb(255, 103, 92) 61%
  );
  box-shadow: 1px 2px 4px 2px rgba(37, 45, 38, 0.8);
`;

export const StyledPageDisplay = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 2vh 5vh 2vh 5vh;
  line-height: 5vh;
`;

export const CancelButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 6vh;
  border: none;
  color: white;
  border-radius: 10px;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.7), #ab2424 61%);
  box-shadow: 1px 2px 4px 2px rgba(246, 186, 214, 0.8);
  &:hover {
    background: #ab2424;
  }
`;

export const StyledFooter = styled.div`
  display: flex;
  position: fixed;
  bottom: 0%;
  width: 80vw;
  align-self: center;
  align-items: center;
  justify-content: center;
`;

export const StyledSavedText = styled.h1`
  color: #d7b470;
  font-family: "Roboto", sans-serif;
  margin-top: 14vh;
  font-size: 3.5rem;
`;

export const StyledSavedTextContainer = styled.div`
  text-align: center;
  height: 60vh;
  color: #e6e4e3;
  letter-spacing: 8px;
  padding: 3vh 5vh 3vh 5vh;
  background: rgba(37, 45, 38, 0.54);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(37, 45, 38, 0.3);
  margin: 3.5vh;
`;

export const StyledConfirmButton = styled.button`
  width: 100px;
  height: 40px;
  background-color: #049350;
  font-weight: bold;
  color: white;
  border: 0.5px solid green;
  border-radius: 15px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  padding: 10px 5px;
  margin: 10px 5px;
  margin: 5px;
`;
