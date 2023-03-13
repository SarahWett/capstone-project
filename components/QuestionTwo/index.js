import { useState, useEffect } from "react";
import styled from "styled-components";

const StyledCheckboxAreas = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default function Tags({
  formData,
  setFormData,
  name,
  listOfOptions,
  checkedCheckbox,
  setCheckedCheckbox,
  required,
}) {
  const [state, setState] = useState(() => {
    const savedState = JSON.parse(localStorage.getItem("tagsState"));
    return (
      savedState || {
        family: false,
        friends: false,
        partner: false,
        work: false,
        hobby: false,
        household: false,
        tv: false,
        sports: false,
        walk: false,
      }
    );
  });

  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    localStorage.setItem("tagsState", JSON.stringify(state));
    setFormData((prevFormData) => ({ ...prevFormData, tags: state }));
    setIsValid(Object.values(state).some((val) => val));
  }, [state, setFormData]);

  const handleInputChange = (e) => {
    const { name, checked } = e.target;
    setState((prevState) => ({ ...prevState, [name]: checked }));
    //Checking if at least one checknbox is checked
    setIsValid(Object.values({ ...state, [name]: checked }).some((val) => val));
  };

  //   const { isChecked } = checkedCheckbox;
  return (
    <>
      {listOfOptions.map((tags, index) => {
        const { tagName } = tags;
        return (
          <label htmlFor="family" key={index}>
            {tagName}
            <input
              type="checkbox"
              id={tagName}
              name={name}
              value={tagName}
              //   checked={isChecked === tagName}
              onChange={handleInputChange}
            />
          </label>
        );
      })}

      {/* {formData.tags === [] && <p>Please select at least one checkbox.</p>}
      <StyledCheckboxAreas>
        <label htmlFor="family">Family</label>
        <input
          type="checkbox"
          id="family"
          name="family"
          value="family"
          checked={state.family}
          onChange={handleInputChange}
        />
      </StyledCheckboxAreas>
      <StyledCheckboxAreas>
        <label htmlFor="sports">Sports</label>
        <input
          type="checkbox"
          id="sports"
          name="sports"
          value="sports"
          checked={state.sports}
          onChange={handleInputChange}
        />
      </StyledCheckboxAreas>
      <StyledCheckboxAreas>
        <label htmlFor="walk">Walk</label>
        <input
          type="checkbox"
          id="walk"
          name="walk"
          value="walk"
          checked={state.walk}
          onChange={handleInputChange}
        />
      </StyledCheckboxAreas>
      <StyledCheckboxAreas>
        <label htmlFor="friends">Friends</label>
        <input
          type="checkbox"
          id="friends"
          name="friends"
          value="friends"
          checked={state.friends}
          onChange={handleInputChange}
        />
      </StyledCheckboxAreas>
      <StyledCheckboxAreas>
        <label htmlFor="work">Work</label>
        <input
          type="checkbox"
          id="work"
          name="work"
          value="work"
          checked={state.work}
          onChange={handleInputChange}
        />{" "}
      </StyledCheckboxAreas>
      <StyledCheckboxAreas>
        <label htmlFor="partner">Partner</label>
        <input
          type="checkbox"
          id="partner"
          name="partner"
          value="partner"
          checked={state.partner}
          onChange={handleInputChange}
        />
      </StyledCheckboxAreas>
      <StyledCheckboxAreas>
        <label htmlFor="hobby">Hobby</label>
        <input
          type="checkbox"
          id="hobby"
          name="hobby"
          value="hobby"
          checked={state.hobby}
          onChange={handleInputChange}
        />
      </StyledCheckboxAreas> */}
    </>
  );
}
