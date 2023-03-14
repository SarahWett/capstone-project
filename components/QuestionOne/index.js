import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function Smileys({
  formData,
  setFormData,
  name,
  listOfOptions,
  checkedRadio,
  setCheckedRadio,
  required,
  handleSmileySelection,
  smileySelection,
  setSmileySelection,
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

  const handleSmileyInputChange = (e) => {
    setFormData({ ...formData, smiley: e.target.value });
    setSmileySelection(e.target.value);
    localStorage.setItem("smileySelection", e.target.value);

    setIsToggled(true);
    // setCheckedRadio({ isChecked: e.target.value });
  };
  //   const { isChecked } = checkedRadio;
  return (
    <>
      {listOfOptions.map((smiley, index) => {
        const { smileyName } = smiley;
        return (
          <label key={index} htmlFor={smileyName}>
            {smileyName}
            <input
              checked={formData.smiley === smileyName}
              onClick={() => {
                //   setCheckedRadio({ isChecked: smileyName });
                setIsToggled(true);
                setSmileySelection(smileyName);
                localStorage.setItem("smileySelection", smileyName);
                //   localStorage.setItem("smileySelection", smileyName);
              }}
              type="radio"
              id={smileyName}
              name={name}
              value={smileyName}
              required={required}
              onChange={handleSmileyInputChange}
              onClick={handleSmileySelection}
            />
          </label>
        );
      })}
    </>
  );
}
