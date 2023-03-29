import styled from "styled-components";
import Lottie from "lottie-react";

export const Loader = styled.div`
  margin-top: 12vh;
  width: 100vw;
  height: 60vh;
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
export const StyledLottie = styled(Lottie)`
  width: 100%;
`;
