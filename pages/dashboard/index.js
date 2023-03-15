import Header from "@/components/Header";
import Navbar from "@/components/Navigation";
import NavItems from "@/components/NavItems";
import DashCards from "@/components/DashboardCards";

export default function DashboardOverview() {
  return (
    <>
      <Header>Dashboard</Header>
      <DashCards />
      <Navbar>
        <NavItems />
      </Navbar>
    </>
  );
}
