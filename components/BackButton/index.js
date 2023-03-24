import styled from "styled-components";
import { useRouter } from "next/router";
import { IoArrowBackCircleOutline } from "react-icons/io5";

const StyledBackButton = styled.button`
  color: #fff;
  border: 1px solid #fff;
  border-radius: 20%;
  padding: 0.4vh 3vh;
`;

export default function BackButton() {
  const router = useRouter();
  return (
    <StyledBackButton onClick={() => router.back()}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 12L3.29289 11.2929L2.58579 12L3.29289 12.7071L4 12ZM19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11V13ZM9.29289 5.29289L3.29289 11.2929L4.70711 12.7071L10.7071 6.70711L9.29289 5.29289ZM3.29289 12.7071L9.29289 18.7071L10.7071 17.2929L4.70711 11.2929L3.29289 12.7071ZM4 13H19V11H4V13Z"
          fill="#252D26"
        />
      </svg>
    </StyledBackButton>
  );
}
