import Link from "next/link";
import { useRouter } from "next/router";
import { StyledDBLink } from "./DBButton.styles";

export default function DBButton() {
  const router = useRouter();
  const isDashboardPage = router.pathname === "/dashboard";

  return (
    <StyledDBLink aria-label="dashboard" filled={isDashboardPage}>
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
            stroke={isDashboardPage ? "#fff" : "#252D26"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="2"
            stroke={isDashboardPage ? "#fff" : "#252D26"}
            strokeWidth="2"
            fill={isDashboardPage ? "#252D26" : "none"}
          />
        </svg>
      </Link>
    </StyledDBLink>
  );
}
