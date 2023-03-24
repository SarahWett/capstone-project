import styled from "styled-components";

const StyledBadge = styled.span`
  display: inline-block;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;
  padding: 2px 9px;
  border-radius: 50%;
  background-color: #fff;
  color: #292528;
  font-weight: 400;
`;
export default function Badge({ children, isActive }) {
  return (
    <StyledBadge className={`badge${isActive ? " badge--active" : ""}`}>
      {children}
    </StyledBadge>
  );
}
