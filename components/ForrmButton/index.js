import styled from "styled-components";

const StyledFooterButton = styled.button`
  width: 100px;
  height: 40px;
  font-weight: bold;
  color: white;
  border-radius: 15px;
  color: #e6e4e3;
  background: -webkit-linear-gradient(
    rgb(37, 45, 38) 0%,
    rgb(151, 154, 135) 84%
  );
  box-shadow: 2px 4px 8px 3px rgba(107, 110, 148, 0.8);
  position: relative;
  z-index: 1;
  &::after {
    content: "";
    position: absolute;
    width: 24vw;
    height: 62%;
    border-radius: 80px;
    background: linear-gradient(
      to bottom,
      rgba(215, 180, 112, 0.7),
      rgba(37, 45, 38, 0.1) 61%
    );
    top: 2px;
    left: 4px;
  }
  &:hover {
    transform: scale(1.1);
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
  margin: 10px 5px;
  margin: 5px;
  &:disabled {
    background: rgba(255, 255, 255, 0.7);
  }
`;

export default function FooterButton(props) {
  return (
    <StyledFooterButton
      type={props.type}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </StyledFooterButton>
  );
}
