import Link from "next/link";
import styled from "styled-components";

const Button = styled.button`
  background: #f2f2f2;
  border: 1px solid #fff;
  border-radius: 20%;
`;

export default function HomeButton() {
  return (
    <Button type="button">
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
    </Button>
  );
}
