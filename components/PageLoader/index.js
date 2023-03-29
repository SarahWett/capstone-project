import { Heading } from "../Header/StyledHeader";

import animationData from "../../public/101075-thoughts.json";
import { Loader, StyledLottie } from "./PageLoader.styles";

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
