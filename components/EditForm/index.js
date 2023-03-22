import { StyledSavedTextContainer } from "../Form/StyledForm";
import { StyledSavedText } from "../Form/StyledForm";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import useLocalStorageState from "use-local-storage-state";
import { StyledTextarea } from "./EditStyles";
import { StyledEditFormContainer } from "./EditStyles";

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

export default function EditForm({
  formData,
  setFormData,
  id,
  smiley,
  tags,
  message,
}) {
  const [edit, setEdit] = useLocalStorageState("currentEdit", {
    defaultValue: [
      {
        smiley: "",
        tags: [],
        message: "",
      },
    ],
  });

  function handleEditEntry(editedEntry) {
    setFormData(formData.date, formData.id, { edit });
  }
  function handleSmileyChange(event) {
    const updateEditEntry = { ...edit[0], smiley: event.target.value };
    setEdit([updateEditEntry]);
  }

  function handleTagsChange(event) {
    const keyToUpdate = event.target.name;

    if (edit[0].tags.includes(keyToUpdate)) {
      const copyOfTags = edit[0].tags;
      const indexOfClickedTag = copyOfTags.indexOf(keyToUpdate);
      const updatedTags = [
        ...copyOfTags.slice(0, indexOfClickedTag),
        ...copyOfTags.slice(indexOfClickedTag + 1),
      ];
      const updatedTagsEntry = {
        ...edit[0],
        tags: [...updatedTags],
      };
      setEdit([updatedTagsEntry]);
    } else {
      const updatedTagsEntry = {
        ...edit[0],
        tags: [...edit[0].tags, keyToUpdate],
      };
      setEdit([updatedTagsEntry]);
    }
  }

  function handleMessageChange(event) {
    const updatedMessageEntry = { ...edit[0], message: event.target.value };
    setEdit([updatedMessageEntry]);
  }

  function handleEdit(event) {
    event.preventDefault();

    // to do next US: onAddEditEntry();
    setShowSavedPage(true);

    setTimeout(() => {
      setEdit([{ smiley: "", tags: [], message: "" }]);
      router.push("/dashboard/AllEntries");
    }, 2000);
  }

  return (
    <form>
      <StyledEditFormContainer>
        <h2>How are you feeling today?</h2>
        {listOfSmileyOptions.map((smiley, index) => {
          const { smileyName } = smiley;
          return (
            <label key={index} htmlFor={smileyName}>
              {smileyName}
              <input
                checked={edit[0]?.smiley === smileyName}
                type="radio"
                id={smileyName}
                name="radio"
                value={formData.smiley}
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
                value={formData.tags}
                checked={edit[0].tags.includes(tagName)}
                onChange={handleTagsChange}
              />
            </label>
          );
        })}
        return (
        <>
          <h2>
            Please write what first comes into your mind thinking of today:
          </h2>
          <StyledTextarea
            rows="8"
            value={edit.message}
            type="text"
            id="message"
            name="message"
            required
            onChange={handleMessageChange}
          />
        </>
        );
        <button>
          Done! <IoCheckmarkDoneCircleOutline />
        </button>
      </StyledEditFormContainer>
    </form>
  );
}
