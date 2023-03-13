import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StyledInput = styled.input``;

export default function Smileys({
  formData,
  setFormData,
  name,
  listOfOptions,
  checkedRadio,
  setCheckedRadio,
  required,
}) {
  //Updates local Storage whenever radio button is clicked -saves smiley selection when user navigates back to page

  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = (e) => {
    setIsToggled(!isToggled);
    localStorage.setItem("smileySelection", e.target.value);
  };

  useEffect(() => {
    const storedValue = localStorage.getItem("smileySelection");
    //update formData with stored value
    if (storedValue) {
      setFormData({ ...formData, smiley: storedValue });
    }
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, smiley: e.target.value });
    setIsToggled(true);
  };

  const { isChecked } = checkedRadio;
  return (
    <>
      {listOfOptions.map((smiley, index) => {
        const { smileyName } = smiley;
        return (
          <label key={index} htmlFor={smileyName}>
            {smileyName}
            <input
              checked={isChecked === smileyName}
              onClick={() => {
                setCheckedRadio({ isChecked: smileyName });
                setIsToggled(true);
                localStorage.setItem("smileySelection", smileyName);
              }}
              type="radio"
              id={smileyName}
              name={name}
              value={smileyName}
              required={required}
              onChange={handleInputChange}
            />
          </label>
        );
      })}
    </>
  );
}
