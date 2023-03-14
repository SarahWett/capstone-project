export default function Tags({ formData, setFormData, listOfOptions }) {
  function handleOnChange(event) {
    const newTagsObject = formData.tags;
    const keyToUpdate = event.target.name;
    newTagsObject[keyToUpdate] = !newTagsObject[keyToUpdate];
    setFormData({ ...formData, tags: newTagsObject });
  }

  return (
    <>
      {listOfOptions.map(({ tagName }) => {
        const lowerCaseTagName = tagName.toLowerCase();

        return (
          <label htmlFor={lowerCaseTagName} key={lowerCaseTagName}>
            {tagName}
            <input
              type="checkbox"
              id={lowerCaseTagName}
              name={lowerCaseTagName}
              value={lowerCaseTagName}
              checked={formData.tags[lowerCaseTagName]}
              onChange={handleOnChange}
            />
          </label>
        );
      })}
    </>
  );
}
