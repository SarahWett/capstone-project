import { Heading } from "@/components/Header";
import Navbar from "@/components/Navigation";
import NavItems from "@/components/NavItems";

export default function DashboardOverview() {
  return (
    <>
      <Heading>Dashboard</Heading>
      <Navbar>
        <NavItems />
      </Navbar>
    </>
  );
}
