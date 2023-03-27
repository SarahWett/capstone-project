import Badge from "@/components/Badge/Badge";
import { Heading } from "@/components/Header/StyledHeader";
import Navbar from "@/components/Navigation";
import Entry from "@/components/Entry";
import AddButton from "@/components/AddButton";
import HomeButton from "@/components/HomeButton";
import styled from "styled-components";
import DBButton from "@/components/DashboardButton";
import { useState } from "react";

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
  background-color: rgba(140, 144, 122, 0.4);
  margin: 10px 30px;
  padding: 10px 16px;
  border-radius: 999px;
  border-bottom: 2px solid #8c907a;
`;

const StyledFilter = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledSelect = styled.select`
  border-radius: 22px;
  border: 1px solid #ececea;
  padding: 2vw;
  background-color: #d7b470;
  width: 35vw;
`;

export default function EntriesSection({
  filter,
  formData,
  setFormData,
  allEntriesCount,
  setEntries,
  entries,
}) {
  const [selectedTag, setSelectedTag] = useState("");
  const tags = formData[0].tags;
  console.log(formData);
  return (
    <>
      <Heading>Your Mood:</Heading>
      <StyledSection className="entries-section">
        <StyledBatch>
          All Entries{""}
          <Badge isActive={filter === "all"}>{allEntriesCount}</Badge>
        </StyledBatch>
        <StyledFilter>
          <StyledSelect
            value={selectedTag}
            onChange={(e) => setSelectedTag(e.target.value)}
          >
            <option value="">Filter by Tag</option>
            {tags &&
              tags?.map((tag) => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))}
          </StyledSelect>
        </StyledFilter>
        <StyledEntries>
          {formData
            ?.filter(
              (data) => selectedTag === "" || data.tags.includes(selectedTag)
            )
            .map((data) => (
              <Entry
                key={data.id}
                smiley={data.smiley}
                icon={data.icon}
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
        <DBButton />
        <AddButton />
        <HomeButton />
      </Navbar>
    </>
  );
}
