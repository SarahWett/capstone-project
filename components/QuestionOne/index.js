import { StyledLabel, StyledSmileyInputs } from "./Q1Styles";
import { StyledInput } from "./Q1Styles";
import { motion } from "framer-motion";

export default function Smileys({ entries, setEntries, listOfSmileyOptions }) {
  function handleOnChange(event) {
    const updatedEntry = { ...entries[0], smiley: event.target.value };
    setEntries([updatedEntry]);
  }

  return (
    <>
      <StyledSmileyInputs>
        {listOfSmileyOptions.map((smiley, index) => {
          const { smileyName, icon } = smiley;
          return (
            <StyledLabel key={index} htmlFor={smileyName}>
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
    </>
  );
}
