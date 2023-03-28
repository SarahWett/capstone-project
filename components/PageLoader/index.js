import styled from "styled-components";
import { Heading } from "../Header/StyledHeader";
import Lottie from "lottie-react";
import animationData from "../../public/101075-thoughts.json";

const Loader = styled.div`
  margin-top: 5vh;
  width: 360px;
  height: 80vh;
  border-radius: 8px;
  box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  background: rgba(140, 144, 122, 0.5);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
  border: 1px solid rgb(230, 228, 227);
`;
const StyledLottie = styled(Lottie)`
  width: 100%;
  margin-top: 6vh;
`;
export default function PageLoader() {
  return (
    <>
      <Heading>Let us move..</Heading>
      <Loader>
        <StyledLottie animationData={animationData} loop />
      </Loader>
    </>
  );
}
