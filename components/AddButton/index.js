import styled from "styled-components";

const Button = styled.button`
  background: #f2f2f2;
  border: 1px solid #fff;
  border-radius: 50%;
`;

export default function GeneralButton({ children }) {
  return <Button type="button">{children}</Button>;
}
