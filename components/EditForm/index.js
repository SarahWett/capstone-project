import { StyledSavedTextContainer } from "../Form/StyledForm";
import { StyledSavedText } from "../Form/StyledForm";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import {
  StyledTagsInput,
  StyledTextarea,
  StyledHeading,
  StyledDiv,
  StyledDoneButton,
  StyledSmileySection,
  StyledLabel,
} from "./EditStyles";
import { StyledEditFormContainer } from "./EditStyles";
import { useState } from "react";
import { useRouter } from "next/router";
import {
  BsEmojiLaughing,
  BsEmojiSmile,
  BsEmojiExpressionless,
  BsEmojiFrown,
} from "react-icons/bs";
import Navbar from "../Navigation";
import { motion } from "framer-motion";

export default function EditForm({
  formData,
  setFormData,
  entry,
  listOfSmileyOptions,
  listOfTagOptions,
}) {
  const router = useRouter();
  const [selectedSmiley, setSelectedSmiley] = useState("");

  const [showSavedPage, setShowSavedPage] = useState(false);

  const [edit, setEdit] = useState(entry);

  function handleSmileyChange(event) {
    setEdit({ ...edit, smiley: event.target.value });
    setSelectedSmiley(event.target.value);
  }

  function handleTagsChange(event) {
    const keyToUpdate = event.target.name;

    if (edit.tags.includes(keyToUpdate)) {
      const copyOfTags = edit.tags;
      const indexOfClickedTag = copyOfTags.indexOf(keyToUpdate);
      const updatedTags = [
        ...copyOfTags.slice(0, indexOfClickedTag),
        ...copyOfTags.slice(indexOfClickedTag + 1),
      ];
      const updatedTagsEntry = {
        ...edit,
        tags: [...updatedTags],
      };
      setEdit(updatedTagsEntry);
    } else {
      const updatedTagsEntry = {
        ...edit,
        tags: [...edit.tags, keyToUpdate],
      };
      setEdit(updatedTagsEntry);
    }
  }

  function handleMessageChange(event) {
    setEdit({ ...edit, message: event.target.value });
  }

  function handleEdit(event) {
    event.preventDefault();
    setShowSavedPage(true);
    const copyOfFormData = [...formData];
    const indexToUpdate = copyOfFormData.findIndex(
      (item) => item.id === edit.id
    );

    copyOfFormData[indexToUpdate] = edit;

    setFormData(copyOfFormData);

    setTimeout(() => {
      setShowSavedPage(false);
      router.push("/dashboard/AllEntries");
    }, 2000);
  }

  return (
    <>
      <motion.div
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.75,
        }}
      >
        {showSavedPage ? (
          <>
            <StyledSavedTextContainer>
              <StyledSavedText>Saved!</StyledSavedText>
              <span>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 21C14.0822 21 16.1 20.278 17.7095 18.9571C19.3191 17.6362 20.4209 15.798 20.8271 13.7558C21.2333 11.7136 20.9188 9.59376 19.9373 7.75743C18.9558 5.9211 17.3679 4.48191 15.4442 3.68508C13.5205 2.88826 11.38 2.78311 9.38744 3.38754C7.3949 3.99197 5.67358 5.26858 4.51677 6.99987C3.35997 8.73115 2.83925 10.81 3.04334 12.8822C3.24743 14.9543 4.1637 16.8916 5.63604 18.364"
                    stroke="#FF675C"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M16 10L12.402 14.3175C11.7465 15.1042 11.4187 15.4976 10.9781 15.5176C10.5375 15.5375 10.1755 15.1755 9.45139 14.4514L8 13"
                    stroke="#FF675C"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </StyledSavedTextContainer>
            <Navbar />
          </>
        ) : (
          <form aria-labelledby="edit-form-heading" onSubmit={handleEdit}>
            <StyledEditFormContainer>
              <StyledHeading id="edit-form-heading">
                How are you feeling today?
              </StyledHeading>
              <StyledSmileySection>
                {listOfSmileyOptions.map((smiley, index) => {
                  const { smileyName, icon } = smiley;
                  return (
                    <StyledLabel
                      className={
                        selectedSmiley === smileyName ? "selected" : ""
                      }
                      key={index}
                      htmlFor={smileyName}
                    >
                      {icon}
                      {smileyName}
                      <input
                        checked={edit?.smiley === smileyName}
                        type="radio"
                        id={smileyName}
                        name="radio"
                        value={smileyName}
                        required={true}
                        onChange={handleSmileyChange}
                        aria-label="Smileys"
                      />
                    </StyledLabel>
                  );
                })}
              </StyledSmileySection>
              <StyledHeading>What did you deal with?</StyledHeading>
              <StyledDiv>
                {listOfTagOptions.map(({ tagName }) => {
                  const lowerCaseTagName = tagName.toLowerCase();

                  return (
                    <StyledTagsInput
                      htmlFor={lowerCaseTagName}
                      key={lowerCaseTagName}
                    >
                      {tagName}
                      <input
                        type="checkbox"
                        id={lowerCaseTagName}
                        name={tagName}
                        value={lowerCaseTagName}
                        checked={edit?.tags.includes(tagName)}
                        onChange={handleTagsChange}
                        aria-label="Tags"
                      />
                    </StyledTagsInput>
                  );
                })}
              </StyledDiv>

              <>
                <StyledHeading>
                  Please write what first comes into your mind thinking of
                  today:
                </StyledHeading>
                <StyledDiv>
                  <StyledTextarea
                    rows="8"
                    value={edit?.message}
                    type="text"
                    id="message"
                    name="message"
                    required
                    onChange={handleMessageChange}
                    aria-label="Message"
                  />
                </StyledDiv>
              </>
              <StyledDoneButton>
                Done! <IoCheckmarkDoneCircleOutline />
              </StyledDoneButton>
            </StyledEditFormContainer>
          </form>
        )}
      </motion.div>
    </>
  );
}
