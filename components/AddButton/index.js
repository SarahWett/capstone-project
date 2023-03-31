import Link from "next/link";
import { StyledNavLink } from "./AddButton.styles";

export default function AddButton() {
  return (
    <StyledNavLink aria-label="add">
      <Link aria-label="add new entry" href={"/survey"}>
        <svg
          aria-labelledby="addTitle addDesc"
          width="60"
          height="60"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title id="addTitle">Filled Add Button</title>
          <desc id="addDesc">
            An illustrated rounded add button displayed as a plus sign with
            light lines and a golden background
          </desc>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21H16.5C17.8978 21 18.5967 21 19.1481 20.7716C19.8831 20.4672 20.4672 19.8831 20.7716 19.1481C21 18.5967 21 17.8978 21 16.5V12C21 7.02944 16.9706 3 12 3ZM12 16.0002C11.4477 16.0002 11 15.5525 11 15.0002V13H9C8.44772 13 8 12.5523 8 12C8 11.4477 8.44772 11 9 11H11V9.00024C11 8.44795 11.4477 8.00024 12 8.00024C12.5523 8.00024 13 8.44795 13 9.00024V11H15C15.5523 11 16 11.4477 16 12C16 12.5523 15.5523 13 15 13H13V15.0002C13 15.5525 12.5523 16.0002 12 16.0002Z"
            fill="#CCA149"
          />
        </svg>
      </Link>
    </StyledNavLink>
  );
}
