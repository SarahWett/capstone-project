import Form, { FormElement } from "@/components/Form";

import QuestionCard from "@/components/QuestionCard";
import { Heading } from "@/components/Header/StyledHeader";

export default function Survey({
  formData,
  setFormData,
  onAddEntry,
  entries,
  setEntries,
}) {
  return (
    <>
      <Heading>Survey</Heading>
      <Form
        formData={formData}
        setFormData={setFormData}
        onAddEntry={onAddEntry}
        entries={entries}
        setEntries={setEntries}
      />
    </>
  );
}
