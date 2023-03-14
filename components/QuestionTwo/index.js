import { useState, useEffect } from "react";

export default function Tags({
  formData,
  setFormData,
  name,
  listOfOptions,
  checkedCheckbox,
  setCheckedCheckbox,
  required,
  handleTagSelection,
  setTagSelection,
}) {
  //initialize object with keys set default to false / reads state from localStorage if existing
  const [state, setState] = useState(() => {
    const savedState = localStorage.getItem("tagsSelection");
    return savedState
      ? JSON.parse(savedState)
      : {
          family: false,
          friends: false,
          partner: false,
          work: false,
          hobby: false,
          household: false,
          tv: false,
          sports: false,
          walk: false,
        };
  });
  //Ensuring that at least one option is selected
  // const [isValid, setIsValid] = useState(true);
  //Update localStorage & formData whenever state changes
  // useEffect(() => {
  //   localStorage.setItem("tagsState", JSON.stringify(state));
  //   setFormData((prevFormData) => ({ ...prevFormData, tags: state }));
  //   setIsValid(Object.values(state).some((val) => val));
  // }, [state, setFormData]);

  // const handleTagInputChange = (e) => {
  //   const { name, checked } = e.target;
  //   setState((prevState) => ({ ...prevState, [name]: checked }));
  //   setFormData({ ...formData, tagSelection: e.target.value });
  //   setFormData((prevFormData) => ({ ...prevFormData, tags: state }));
  //   setTagSelection(e.target.value);
  //   localStorage.setItem("tagSelection", e.target.value);
  //Checking if at least one checknbox is checked
  // const isValid = Object.values(checkedCheckbox.isChecked).some((val) => val);
  // }

  const handleTagInputChange = (e) => {
    const { name, checked } = e.target;
    setState((prevState) => ({ ...prevState, [name]: checked }));
    setFormData((prevFormData) => ({
      ...prevFormData,
      tags: Object.entries({ ...state, [name]: checked })
        .filter(([key, value]) => value)
        .map(([key, value]) => key),
    }));
    console.log("new Tags selected");
  };

  //   const { isChecked } = checkedCheckbox;
  return (
    <>
      {listOfOptions.map((tags) => {
        const { tagName } = tags;
        const lowerCaseTagName = tagName.toLowerCase();
        return (
          <label htmlFor={lowerCaseTagName} key={lowerCaseTagName}>
            {tagName}
            <input
              type="checkbox"
              id={lowerCaseTagName}
              name={lowerCaseTagName}
              value={lowerCaseTagName}
              checked={state[lowerCaseTagName]}
              onChange={handleTagInputChange}
              onClick={handleTagSelection}
            />
          </label>
        );
      })}
    </>
  );
}
