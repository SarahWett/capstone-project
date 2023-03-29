import Badge from "@/components/Badge/Badge";
import { Heading } from "@/components/Header/StyledHeader";
import Navbar from "@/components/Navigation";
import Entry from "@/components/Entry";
import AddButton from "@/components/AddButton";
import HomeButton from "@/components/HomeButton";
import DBButton from "@/components/DashboardButton";
import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import {
  StyledSection,
  StyledBatch,
  StyledFilter,
  StyledSelect,
  StyledEntries,
} from "./AllEntries.styles";
import PageLoader from "@/components/PageLoader";

const listOfTagOptions = [
  { tagName: "Family" },
  { tagName: "Friends" },
  { tagName: "Partner" },
  { tagName: "Work" },
  { tagName: "Hobby" },
  { tagName: "Household" },
  { tagName: "TV" },
  { tagName: "Sports" },
  { tagName: "Walk" },
];

export default function EntriesSection({
  filter,
  formData,
  setFormData,
  allEntriesCount,
  setEntries,
  entries,
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
