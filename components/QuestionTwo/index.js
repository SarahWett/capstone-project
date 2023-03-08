import { useState, useEffect } from "react";
import styled from "styled-components";

const StyledCheckboxAreas = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default function Tags({ setFormData }) {
  const [state, setState] = useState(() => {
    const savedState = JSON.parse(localStorage.getItem("tagsState"));
    return (
      savedState || {
        family: false,
        sports: false,
        walk: false,
        friends: false,
        work: false,
        partner: false,
        hobby: false,
      }
    );
  });

  useEffect(() => {
    localStorage.setItem("tagsState", JSON.stringify(state));
    setFormData((prevFormData) => ({ ...prevFormData, tags: state }));
  }, [state, setFormData]);

  const handleInputChange = (e) => {
    const { name, checked } = e.target;
    setState((prevState) => ({ ...prevState, [name]: checked }));
  };

  return (
    <>
      <StyledCheckboxAreas>
        <label htmlFor="family">Family</label>
        <input
          type="checkbox"
          id="family"
          name="family"
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
      </StyledCheckboxAreas>
    </>
  );
}
