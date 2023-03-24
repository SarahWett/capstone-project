import { StyledSavedTextContainer } from "../Form/StyledForm";
import { StyledSavedText } from "../Form/StyledForm";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import useLocalStorageState from "use-local-storage-state";
import { StyledTextarea } from "./EditStyles";
import { StyledEditFormContainer } from "./EditStyles";
import { useState } from "react";
import { useRouter } from "next/router";

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

const listOfSmileyOptions = [
  { smileyName: "awesome" },
  { smileyName: "good" },
  { smileyName: "okay" },
  { smileyName: "aweful" },
];

export default function EditForm({ formData, setFormData, entry }) {
  const router = useRouter();

  const [edit, setEdit] = useState(entry);

  function handleSmileyChange(event) {
    setEdit({ ...edit, smiley: event.target.value });
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
    const copyOfFormData = [...formData];
    const indexToUpdate = copyOfFormData.findIndex(
      (item) => item.id === edit.id
    );

    copyOfFormData[indexToUpdate] = edit;

    setFormData(copyOfFormData);

    setTimeout(() => {
      router.push("/dashboard/AllEntries");
    }, 2000);
  }

  return (
    <form onSubmit={handleEdit}>
      <StyledEditFormContainer>
        <h2>How are you feeling today?</h2>
        {listOfSmileyOptions.map((smiley, index) => {
          const { smileyName } = smiley;
          return (
            <label key={index} htmlFor={smileyName}>
              {smileyName}
              <input
                checked={edit?.smiley === smileyName}
                type="radio"
                id={smileyName}
                name="radio"
                value={smileyName}
                required={true}
                onChange={handleSmileyChange}
              />
            </label>
          );
        })}
        <h2>What did you deal with?</h2>
        {listOfTagOptions.map(({ tagName }) => {
          const lowerCaseTagName = tagName.toLowerCase();

          return (
            <label htmlFor={lowerCaseTagName} key={lowerCaseTagName}>
              {tagName}
              <input
                type="checkbox"
                id={lowerCaseTagName}
                name={tagName}
                value={lowerCaseTagName}
                checked={edit?.tags.includes(tagName)}
                onChange={handleTagsChange}
              />
            </label>
          );
        })}

        <>
          <h2>
            Please write what first comes into your mind thinking of today:
          </h2>
          <StyledTextarea
            rows="8"
            value={edit?.message}
            type="text"
            id="message"
            name="message"
            required
            onChange={handleMessageChange}
          />
        </>
        <button>
          Done! <IoCheckmarkDoneCircleOutline />
        </button>
      </StyledEditFormContainer>
    </form>
  );
}
