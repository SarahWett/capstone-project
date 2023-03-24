import styled from "styled-components";

const StyledFooterButton = styled.button`
  width: 100px;
  height: 40px;
  font-weight: bold;
  color: white;
  border: 0.5px solid white;
  border-radius: 15px;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.7), #355f97 61%);
  box-shadow: 1px 2px 4px 2px rgba(107, 110, 148, 0.8);
  padding: 10px 5px;
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
