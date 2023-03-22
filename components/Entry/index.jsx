import styled from "styled-components";
import { MdEdit } from "react-icons/md";
import router from "next/router";
import EditForm from "@/pages/dashboard/AllEntries/[id]";

const StyledEntry = styled.article`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 16vw;
  width: 80vw;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(8.1px);
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

const StyledDate = styled.time`
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  background: rgba(53, 95, 151, 0.61);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5.9px);
  border: 1px solid rgba(53, 95, 151, 0.57);
  height: 4vh;
`;

const StyledEntryContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
`;

const StyledEntrySmileyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledSmileySection = styled.q`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  text-transform: uppercase;
`;

const StyledNotes = styled.p`
  margin: 0;
  font-size: 12px;
  display: flex;
  text-transform: uppercase;
  justify-content: space-around;
`;

const StyledTags = styled.div`
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  background: rgba(184, 61, 141, 0.62);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5.9px);
  border: 1px solid rgba(184, 61, 141, 0.47);
  height: 3vh;
  width: 20vw;
`;

const StyledDeleteButton = styled.button`
  display: flex;
  border-radius: 50%;
  justify-content: center;
  align-self: center;
  align-items: center;
  text-align: center;
  width: 10vw;
  height: 10vw;
  background-color: #a92121;
  color: antiquewhite;
  &:hover {
    background-color: #c54646;
  }
`;

export default function Entry({
  smiley,
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
            <StyledSmileySection>{smiley}</StyledSmileySection>
          </h2>
        </StyledEntrySmileyContainer>
        <StyledNotes>{message}</StyledNotes>
        {tags?.map((key) => (
          <StyledTags key={key}>{key}</StyledTags>
        ))}
      </StyledEntryContent>
      <StyledDeleteButton type="button" onClick={() => handleDelete(id)}>
        X
      </StyledDeleteButton>
      <button
        type="button"
        onClick={() => router.push(`/dashboard/AllEntries/${id}`)}
      >
        Edit
        <MdEdit />
      </button>
    </StyledEntry>
  );
}
