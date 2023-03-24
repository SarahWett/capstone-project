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

//ALTERNATIVE WAY:
// const [selectedSmiley, setSelectedSmiley] = useState(null);

// const smileyIcons = [
//   { icon: <FaGrinHearts />, value: "awesome" },
//   { icon: <FaRegSmile />, value: "good" },
//   { icon: <FaMeh />, value: "okay" },
//   { icon: <FaFrown />, value: "aweful" },
// ];

// return (
//   <>
//     {smileyIcons.map((smiley, index) => {
//       const { icon, value } = smiley;
//       return (
//         <label key={index} htmlFor={value}>
//           {icon}
//           <input
//             checked={entries[0]?.smiley === value}
//             type="radio"
//             id={value}
//             name="radio"
//             value={value}
//             required={true}
//             onChange={(event) => {
//               setSelectedSmiley(value);
//               handleOnChange(event);
//             }}
//           />
//         </label>
//       );
//     })}
//     <p>You selected: {smiley}</p>
//   </>
// );
// }
