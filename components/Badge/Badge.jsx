import { StyledBadge } from "../Badge/Badge.styles";

export default function Badge({ children, isActive }) {
  return (
    <StyledBadge className={`badge${isActive ? " badge--active" : ""}`}>
      {children}
    </StyledBadge>
  );
}
