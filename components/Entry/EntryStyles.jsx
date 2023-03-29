import styled from "styled-components";
import { AiFillCheckCircle } from "react-icons/ai";

export const StyledEntry = styled.article`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 10vh;
  width: 80vw;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(8.1px);
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

export const StyledDate = styled.time`
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  color: #ececea;
  border-radius: 16px;
  background: linear-gradient(
    to bottom,
    rgb(204, 161, 73),
    rgba(92, 112, 94, 1) 61%
  );
  box-shadow: rgb(230, 228, 227) 3px 3px 6px 0px inset,
    #252d26 -3px -3px 6px 1px inset;
  height: 4vh;
`;

export const StyledEntryContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
`;

export const StyledEntrySmileyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledSmileySection = styled.q`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  text-transform: uppercase;
`;

export const StyledNotes = styled.p`
  margin: 0;
  font-size: 12px;
  display: flex;
  height: 12vh;
  text-transform: uppercase;
  justify-content: space-around;
  align-items: center;
`;
export const StyledTagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  position: relative;
  gap: 4vw;
`;
export const StyledTags = styled.div`
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  align-items: center;
  color: rgb(53, 4, 0);
  font-size: 11px;
  font-weight: 600;
  border-radius: 16px;
  background: linear-gradient(
    to bottom,
    rgb(230, 228, 227, 0.7),
    rgb(204, 161, 73) 61%
  );
  box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,
    rgba(94, 58, 58, 0.5) -3px -3px 6px 1px inset;
  height: 3vh;
  width: 20vw;
`;

export const ButtonContent = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
`;

export const StyledDeleteButton = styled.button`
  display: absolute;
  top: 1px;
  border-radius: 50%;
  align-self: center;
  justify-self: flex-start;
  align-items: center;
  width: 8vw;
  height: 8vw;
  background-color: #a92121;
  color: antiquewhite;
  &:hover {
    background-color: #c54646;
  }
`;

export const StyledEditButton = styled.button`
  border: none;
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  margin-left: 8vh;
  font-size: 15px;
  padding: 22px 35px;
  width: 36vw;
  height: 3vh;
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
    width: 26vw;
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
export const DangerZone = styled.h3`
  color: #fff;
`;

export const StyledPopUp = styled.div`
  position: absolute;
  top: 39vh;
  right: 0vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 5vh;
  background: rgba(255, 103, 92, 1);
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  z-index: 999; /* ensure the popup appears on top of everything else */
  border-radius: 16px;
  width: 80vw;
  height: 25vh;
`;

export const StyledPopButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4vh;
  margin-top: 1vh;
`;

export const StyledPopUpButtons = styled.button`
  border: none;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
`;

export const StyledAiFillCheckCircle = styled(AiFillCheckCircle)`
  color: #849a85;
`;
