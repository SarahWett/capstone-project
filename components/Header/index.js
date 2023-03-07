import styled from "styled-components";

export const Heading = styled.h1`
  text-align: center;
  color: #fff;
  font-family: "Herr Von Muellerhoff", cursive;
  letter-spacing: 8px;
  border-bottom: 1px solid #355f97;
  padding-bottom: 3vh;
  padding-top: 3vh;
  background-color: #172e4f;
  margin: auto;
  /* position: fixed;
  width: 100%;
  z-index: 102; */
`;

export default function Header({ children }) {
  return <Heading>{children}</Heading>;
}
