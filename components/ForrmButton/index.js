import { StyledFooterButton } from "./FormButton.styles";

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
