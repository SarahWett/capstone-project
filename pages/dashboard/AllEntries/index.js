import { Fragment } from "react";
import Badge from "@/components/Badge/Badge";
import { Heading } from "@/components/Header/StyledHeader";
import Navbar from "@/components/Navigation";
import Entry from "@/components/Entry";
import BackButton from "@/components/BackButton";
import AddButton from "@/components/AddButton";
import HomeButton from "@/components/HomeButton";
import styled from "styled-components";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 48px;
`;

const StyledEntries = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

const StyledBatch = styled.div`
  border: 1 px solid black;
  background-color: white;
  display: flex;
  gap: 8px;
  justify-content: center;
  text-transform: uppercase;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  transition: background-color 0.2s ease-in-out;
  background-color: transparent;
  margin: 10px 30px;
  padding: 10px 16px;
  border-radius: 999px;
`;

export default function EntriesSection({
  filter,
  data,
  formData,
  setFormData,
  id,
  tags,
  allEntriesCount,
  setEntries,
  entries,
}) {
  return (
    <>
      <Heading>Your Mood:</Heading>
      <StyledSection className="entries-section">
        <StyledBatch>
          All Entries{""}
          <Badge isActive={filter === "all"}>{allEntriesCount}</Badge>
        </StyledBatch>
        <StyledEntries>
          {formData?.map((data) => (
            <Entry
              key={data.id}
              smiley={data.smiley}
              message={data.message}
              date={data.date}
              tags={data.tags}
              id={data.id}
              entries={entries}
              setEntries={setEntries}
              formData={formData}
              setFormData={setFormData}
            />
          ))}
        </StyledEntries>
      </StyledSection>
      <Navbar>
        <BackButton />
        <AddButton />
        <HomeButton />
      </Navbar>
    </>
  );
}
