import { StyledInput } from "./Q2Styles";

export default function Tags({
  entries,
  setEntries,
  formData,
  setFormData,
  listOfOptions,
}) {
  function handleOnChange(event) {
    const isChecked = event.target.checked;
    const tagName = event.target.name;
    const checkedTags = entries.tags || [];

    // Update the checkedTags array based on whether the checkbox is checked or not
    if (isChecked) {
      checkedTags.push(tagName);
    } else {
      const index = checkedTags.indexOf(tagName);
      if (index > -1) {
        checkedTags.splice(index, 1);
      }
    }

    // Update the entries state with the new checkedTags array
    setEntries({ ...entries, tags: checkedTags });
  }

  return (
    <>
      {listOfOptions.map(({ tagName }) => {
        const lowerCaseTagName = tagName.toLowerCase();

        return (
          <StyledInput htmlFor={lowerCaseTagName} key={lowerCaseTagName}>
            {tagName}
            <input
              type="checkbox"
              id={lowerCaseTagName}
              name={tagName}
              checked={(entries.tags || []).indexOf(tagName) > -1}
              onChange={handleOnChange}
            />
          </StyledInput>
        );
      })}
    </>
  );
}
