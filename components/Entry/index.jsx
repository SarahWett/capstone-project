import { MdEdit } from "react-icons/md";
import router from "next/router";
import {
  StyledDate,
  StyledEntry,
  StyledDeleteButton,
  StyledEntryContent,
  StyledEntrySmileyContainer,
  StyledSmileySection,
  StyledNotes,
  StyledTagsContainer,
  StyledTags,
  StyledEditButton,
  ButtonContent,
} from "./EntryStyles";

export default function Entry({
  smiley,
  icon,
  message,
  date,
  tags,
  id,
  setEntries,
  setFormData,
  formData,
  entries,
  entry,
}) {
  function handleDelete(idToRemove) {
    alert("Are you sure you want to delete this entry?");
    setFormData(formData.filter((data) => data.id !== idToRemove));
  }

  return (
    <StyledEntry>
      <StyledDate>{date}</StyledDate>
      <StyledEntryContent>
        <StyledEntrySmileyContainer>
          <h2>
            <StyledSmileySection>
              {icon}
              {smiley}
            </StyledSmileySection>
          </h2>
        </StyledEntrySmileyContainer>
        <StyledNotes>{message}</StyledNotes>
        <StyledTagsContainer>
          {tags?.map((key) => (
            <StyledTags key={key}>{key}</StyledTags>
          ))}
        </StyledTagsContainer>
      </StyledEntryContent>
      <ButtonContent>
        <StyledDeleteButton type="button" onClick={() => handleDelete(id)}>
          X
        </StyledDeleteButton>
        <StyledEditButton
          type="button"
          onClick={() => router.push(`/dashboard/AllEntries/${id}`)}
        >
          Edit
          <MdEdit />
        </StyledEditButton>
      </ButtonContent>
    </StyledEntry>
  );
}
