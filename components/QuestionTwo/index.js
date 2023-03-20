import { StyledInput } from "./Q2Styles";

export default function Tags({
  entries,
  setEntries,
  formData,
  setFormData,
  listOfOptions,
}) {
  function handleOnChange(event) {
    //LÖSUNG ERNST - THROWS ERROR - UNDEFINED
    // const newTagsObject = formData.tags;
    // const keyToUpdate = event.target.name;
    // newTagsObject[keyToUpdate] = !newTagsObject[keyToUpdate];
    // setFormData({ ...formData, tags: newTagsObject });

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

    // const isChecked = event.target.checked;
    // const tagName = event.target.name;
    // const checkedTags = new Set(entries.tags || []);

    // // Update the checkedTags set based on whether the checkbox is checked or not
    // if (isChecked) {
    //   checkedTags.add(tagName);
    // } else {
    //   checkedTags.delete(tagName);
    // }

    // // Update the entries state with the new checkedTags set
    // setEntries({ ...entries, tags: [...checkedTags] });
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
