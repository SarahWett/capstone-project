import Header from "@/components/Header";
import Navbar from "@/components/Navigation";
import NavItems from "@/components/NavItems";
import DashCards from "@/components/DashboardCards";

export default function DashboardOverview({ formData, setFormData, entries }) {
  return (
    <>
      <Header>Dashboard</Header>
      <DashCards
        formData={formData}
        setFormData={setFormData}
        entries={entries}
      />
      <Navbar>
        <NavItems />
      </Navbar>
    </>
  );
}
