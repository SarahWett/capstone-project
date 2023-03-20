export default function Smileys({
  formData,
  setFormData,
  listOfOptions,
  entries,
  smiley,
  setEntries,
}) {
  function handleOnChange(event) {
    setEntries({ ...entries, smiley: event.target.value });
    // setFormData(...formData, { ...entries });
  }
  return (
    <>
      {listOfOptions.map((smiley, index) => {
        const { smileyName } = smiley;
        return (
          <label key={index} htmlFor={smileyName}>
            {smileyName}
            <input
              checked={entries?.smiley === smileyName}
              type="radio"
              id={smileyName}
              name="radio"
              value={smileyName}
              required={true}
              onChange={handleOnChange}
            />
          </label>
        );
      })}
    </>
  );
}
