import { StyledLabel, StyledSmileyInputs } from "./Q1Styles";
import { StyledInput } from "./Q1Styles";

export default function Smileys({
  formData,
  setFormData,
  listOfOptions,
  entries,
  smiley,
  setEntries,
}) {
  function handleOnChange(event) {
    const updatedEntry = { ...entries[0], smiley: event.target.value };
    setEntries([updatedEntry]);
  }

  return (
    <StyledSmileyInputs>
      {listOfOptions.map((smiley, index) => {
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
  );
}
