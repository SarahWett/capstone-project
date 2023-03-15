import styled from "styled-components";

const StyledFooterButton = styled.button`
  width: 100px;
  height: 40px;
  background-color: #355f97;
  font-weight: bold;
  color: white;
  border: 0.5px solid white;
  border-radius: 15px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  padding: 10px 5px;
  margin: 10px 5px;
  margin: 5px;
  &:disabled {
    background-color: #d7d4ed;
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
