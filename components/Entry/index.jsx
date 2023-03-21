import styled from "styled-components";

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
  justify-content: center;
  text-align: center;
`;

export default function Entry({
  smiley,
  message,
  date,
  tags,
  id,
  setEntries,
  entries,
  entry,
}) {
  const keys = tags ? Object.keys(tags) : [];
  const filtered = keys.filter((key) => {
    return tags[key];
  });

  function handleDelete(idToRemove) {
    setEntries(entriesArray.filter((entry) => entry.id !== idToRemove));
    console.log(entriesArray.id, idToRemove);
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
        {tags.map((key) => (
          <StyledTags key={key}>{key}</StyledTags>
        ))}
      </StyledEntryContent>
      <StyledDeleteButton type="button" onClick={() => handleDelete(id)}>
        X
      </StyledDeleteButton>
    </StyledEntry>
  );
}