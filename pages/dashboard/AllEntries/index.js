import Badge from "../../../components/Badge/Badge";
import { Heading } from "../../../components/Header/StyledHeader";
import Navbar from "../../../components/Navigation/index";
import Entry from "../../../components/Entry";
import AddButton from "../../../components/AddButton";
import HomeButton from "../../../components/HomeButton";
import DBButton from "../../../components/DashboardButton";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PageLoader from "../../../components/PageLoader";
import styled from "styled-components";

export default function EntriesSection({
  filter,
  formData,
  setFormData,
  allEntriesCount,
  setEntries,
  entries,
  listOfSmileyOptions,
  listOfTagOptions,
}) {
  const [selectedTag, setSelectedTag] = useState("");
  const tags = listOfTagOptions;
  const [filteredEntriesCount, setFilteredEntriesCount] =
    useState(allEntriesCount);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const filteredEntries = formData.filter(
      (data) => selectedTag === "" || data.tags.includes(selectedTag)
    );
    setFilteredEntriesCount(filteredEntries.length);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [formData, selectedTag]);

  return (
    <>
      {isLoading ? (
        <PageLoader />
      ) : (
        <>
          <Heading>Your Mood:</Heading>
          <StyledSection className="entries-section">
            <StyledBatch>
              All Entries{""}
              <Badge isActive={filter === "all"}>
                {selectedTag === "" ? allEntriesCount : filteredEntriesCount}
              </Badge>
            </StyledBatch>
            <StyledFilter>
              <StyledSelect
                value={selectedTag}
                onChange={(e) => setSelectedTag(e.target.value)}
              >
                <option value="">Filter by Tag</option>
                {tags?.map((tag) => (
                  <option key={tag.tagName} value={tag.tagName}>
                    {tag.tagName}
                  </option>
                ))}
              </StyledSelect>
            </StyledFilter>

            <motion.div
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.75,
              }}
            >
              <StyledEntries>
                {formData
                  ?.filter(
                    (data) =>
                      selectedTag === "" || data.tags.includes(selectedTag)
                  )
                  .sort((a, b) => new Date(b.date) - new Date(a.date))
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
                      listOfSmileyOptions={listOfSmileyOptions}
                      listOfTagOptions={listOfTagOptions}
                    />
                  ))}
              </StyledEntries>
            </motion.div>
          </StyledSection>
          <Navbar>
            <DBButton />
            <AddButton />
            <HomeButton />
          </Navbar>
        </>
      )}
    </>
  );
}

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
  & > * {
    order: -1;
  }
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
  position: sticky;
  top: 3vh;
  z-index: 200;
`;

const StyledSelect = styled.select`
  border-radius: 22px;
  border: 1px solid #ececea;
  padding: 2vw;
  background-color: #d7b470;
  width: 35vw;
`;
