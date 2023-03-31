import { MdEdit } from "react-icons/md";
import router from "next/router";
import { useState } from "react";
import { motion } from "framer-motion";
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
  StyledPopUp,
  DangerZone,
  StyledAiFillCheckCircle,
  StyledPopUpButtons,
  StyledPopButtonContainer,
} from "./EntryStyles";

export default function Entry({
  smiley,
  icon,
  message,
  date,
  tags,
  id,
  setFormData,
  formData,
}) {
  const [showModal, setShowModal] = useState(false);

  const handleConfirmDelete = (idToRemove) => {
    setFormData(formData.filter((data) => data.id !== idToRemove));
    setShowModal(false);
  };
  const handleCancelDelete = () => {
    setShowModal(false);
  };

  function handleDelete() {
    setShowModal(true);
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
        <div>
          <StyledDeleteButton onClick={() => handleDelete(id)}>
            X
          </StyledDeleteButton>
          {showModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <StyledPopUp>
                <DangerZone>DangerZone</DangerZone>
                <p>Are you sure you want to delete this entry?</p>
                <StyledPopButtonContainer>
                  <StyledPopUpButtons onClick={() => handleConfirmDelete(id)}>
                    Yes
                    <StyledAiFillCheckCircle />
                  </StyledPopUpButtons>
                  <StyledPopUpButtons onClick={handleCancelDelete}>
                    No
                  </StyledPopUpButtons>
                </StyledPopButtonContainer>
              </StyledPopUp>
            </motion.div>
          )}
        </div>
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
