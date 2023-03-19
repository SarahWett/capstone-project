import { StyledInput } from "./Q2Styles";

export default function Tags({
  entries,
  setEntries,
  formData,
  setFormData,
  listOfOptions,
}) {
  function handleOnChange(event) {
    // const keyToUpdate = event.target.name;
    // setFormData({
    //   ...formData,
    //   tags: {
    //     ...formData.tags,
    //     [keyToUpdate]: !formData.tags[keyToUpdate],
    //   },
    // });
    // setFormData(...formData, { ...entries });
  }

  //IDEA TO GET TAGS ON SUNDAY:
  // function handleCheckboxChange(event, index) {
  //   const isCheckedCopy = [...checkedCheckbox.isChecked]; // create a copy of the state array
  //   isCheckedCopy[index] = event.target.checked; // update the copy with the new value
  //   setCheckedCheckbox({ isChecked: isCheckedCopy }); // update the state with the new array
  // }

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
              name={lowerCaseTagName}
              value={lowerCaseTagName}
              // checked={formData?.tags?.[lowerCaseTagName] || false}
              onChange={handleOnChange}
            />
          </StyledInput>
        );
      })}
    </>
  );
}
