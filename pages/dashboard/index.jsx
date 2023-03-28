import Header from "@/components/Header";
import Navbar from "@/components/Navigation";
import NavItems from "@/components/NavItems";
import DashCards from "@/components/DashboardCards";
import { motion } from "framer-motion";

export default function DashboardOverview({ formData, setFormData, entries }) {
  return (
    <>
      <Header>Dashboard</Header>
      <motion.div
        initial={{ y: 45, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.75,
        }}
        className="nav-bar"
      >
        <DashCards
          formData={formData}
          setFormData={setFormData}
          entries={entries}
        />
      </motion.div>
      <Navbar>
        <NavItems />
      </Navbar>
    </>
  );
}
