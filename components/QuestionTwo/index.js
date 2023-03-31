import { StyledInput } from "./Q2Styles";

export default function Tags({
  entries,
  setEntries,
  formData,
  setFormData,
  listOfTagOptions,
  id,
}) {
  function handleOnChange(event) {
    const keyToUpdate = event.target.name;

    if (entries[0].tags.includes(keyToUpdate)) {
      const copyOfTags = entries[0].tags;
      const indexOfClickedTag = copyOfTags.indexOf(keyToUpdate);
      const updatedTags = [
        ...copyOfTags.slice(0, indexOfClickedTag),
        ...copyOfTags.slice(indexOfClickedTag + 1),
      ];
      const updatedEntry = {
        ...entries[0],
        tags: [...updatedTags],
      };
      setEntries([updatedEntry]);
    } else {
      const updatedEntry = {
        ...entries[0],
        tags: [...entries[0].tags, keyToUpdate],
      };
      setEntries([updatedEntry]);
    }
  }

  return (
    <>
      {listOfTagOptions.map(({ tagName }) => {
        const lowerCaseTagName = tagName.toLowerCase();

        return (
          <StyledInput htmlFor={lowerCaseTagName} key={lowerCaseTagName}>
            {tagName}
            <input
              type="checkbox"
              id={lowerCaseTagName}
              name={tagName}
              checked={entries[0].tags.includes(tagName)}
              onChange={handleOnChange}
              aria-label={tagName}
            />
          </StyledInput>
        );
      })}
    </>
  );
}
