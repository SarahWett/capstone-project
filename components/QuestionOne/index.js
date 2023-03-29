import { StyledLabel, StyledSmileyInputs } from "./Q1Styles";
import { StyledInput } from "./Q1Styles";
import { useState } from "react";

export default function Smileys({ entries, setEntries, listOfSmileyOptions }) {
  const [selectedSmiley, setSelectedSmiley] = useState("");

  function handleOnChange(event) {
    const updatedEntry = { ...entries[0], smiley: event.target.value };
    setEntries([updatedEntry]);
    setSelectedSmiley(event.target.value);
  }

  return (
    <StyledSmileyInputs>
      {listOfSmileyOptions.map((smiley, index) => {
        const { smileyName, icon } = smiley;
        return (
          <StyledLabel
            key={index}
            htmlFor={smileyName}
            className={selectedSmiley === smileyName ? "selected" : ""}
          >
            <div>{icon}</div>
            {smileyName}
            <StyledInput
              checked={entries[0]?.smiley === smileyName}
              type="radio"
              id={smileyName}
              name="radio"
              value={smileyName}
              required={true}
              onChange={handleOnChange}
            />
          </StyledLabel>
        );
      })}
    </StyledSmileyInputs>
  );
}
