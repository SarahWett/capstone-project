import { useRouter } from "next/router";
import Navbar from "@/components/Navigation";
import BackButton from "@/components/BackButton";
import AddButton from "@/components/AddButton";
import HomeButton from "@/components/HomeButton";
import EditForm from "@/components/EditForm";
import { Heading } from "@/components/Header/StyledHeader";

const FormDetailsEdit = ({ formData, setFormData }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Heading>Edit you Entry:</Heading>
      <EditForm formData={formData} setFormData={setFormData} />
      <Navbar>
        <BackButton />
        <AddButton />
        <HomeButton />
      </Navbar>
    </>
  );
};

export default FormDetailsEdit;