import { StyledInput } from "./Q2Styles";

export default function Tags({
  entries,
  setEntries,
  formData,
  setFormData,
  listOfOptions,
}) {
  function handleOnChange(event) {
    const keyToUpdate = event.target.name;

    if (entries.tags.includes(keyToUpdate)) {
      const copyOfTags = entries.tags;
      const indexOfClickedTag = copyOfTags.indexOf(keyToUpdate);
      const updatedTags = [
        ...copyOfTags.slice(0, indexOfClickedTag),
        ...copyOfTags.slice(indexOfClickedTag + 1),
      ];
      setEntries({
        ...entries,
        tags: [...updatedTags],
      });
    } else {
      setEntries({
        ...entries,
        tags: [...entries.tags, keyToUpdate],
      });
    }
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
              checked={entries.tags.includes(tagName)}
              onChange={handleOnChange}
            />
          </StyledInput>
        );
      })}
    </>
  );
}
