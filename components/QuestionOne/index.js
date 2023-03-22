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
    <>
      {listOfOptions.map((smiley, index) => {
        const { smileyName } = smiley;
        return (
          <label key={index} htmlFor={smileyName}>
            {smileyName}
            <input
              checked={entries[0]?.smiley === smileyName}
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
