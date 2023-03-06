import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import { useState } from "react";
import Button from "../AddButton";

const StyledList = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 100%;
  position: fixed;
  bottom: 0;
  font-size: 3vh;
  padding: 3vh;
  background-color: whitesmoke;
  z-index: 100;
  margin: auto;
  align-items: center;
`;

export default function Navbar() {
  return (
    <StyledList>
      <Link href="/dashboard">
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17 9L13.9558 13.5662C13.5299 14.2051 12.5728 14.1455 12.2294 13.4587L11.7706 12.5413C11.4272 11.8545 10.4701 11.7949 10.0442 12.4338L7 17"
            stroke="#355F97"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="2"
            stroke="#355F97"
            stroke-width="2"
          />
        </svg>
      </Link>
      <Link href={"/survey"}>
        <svg
          width="60"
          height="60"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21H16.5C17.8978 21 18.5967 21 19.1481 20.7716C19.8831 20.4672 20.4672 19.8831 20.7716 19.1481C21 18.5967 21 17.8978 21 16.5V12C21 7.02944 16.9706 3 12 3ZM12 16.0002C11.4477 16.0002 11 15.5525 11 15.0002V13H9C8.44772 13 8 12.5523 8 12C8 11.4477 8.44772 11 9 11H11V9.00024C11 8.44795 11.4477 8.00024 12 8.00024C12.5523 8.00024 13 8.44795 13 9.00024V11H15C15.5523 11 16 11.4477 16 12C16 12.5523 15.5523 13 15 13H13V15.0002C13 15.5525 12.5523 16.0002 12 16.0002Z"
            fill="#CC66A8"
          />
        </svg>
      </Link>
      <Link href={"/"}>
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 12.7596C5 11.4019 5 10.723 5.27446 10.1262C5.54892 9.52949 6.06437 9.08769 7.09525 8.20407L8.09525 7.34693C9.95857 5.7498 10.8902 4.95123 12 4.95123C13.1098 4.95123 14.0414 5.7498 15.9047 7.34693L16.9047 8.20407C17.9356 9.08769 18.4511 9.52949 18.7255 10.1262C19 10.723 19 11.4019 19 12.7596V17C19 18.8856 19 19.8284 18.4142 20.4142C17.8284 21 16.8856 21 15 21H9C7.11438 21 6.17157 21 5.58579 20.4142C5 19.8284 5 18.8856 5 17V12.7596Z"
            stroke="#355F97"
            stroke-width="2"
          />
          <path
            d="M14.5 21V16C14.5 15.4477 14.0523 15 13.5 15H10.5C9.94772 15 9.5 15.4477 9.5 16V21"
            stroke="#355F97"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </Link>
    </StyledList>
  );
}
