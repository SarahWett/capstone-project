import { StyledFooterButton } from "./FormButton.styles";

export default function FooterButton(props) {
  return (
    <StyledFooterButton
      type={props.type}
      disabled={props.disabled}
      onClick={props.onClick}
      aria-label={props.ariaLabel}
    >
      {props.children}
    </StyledFooterButton>
  );
}
