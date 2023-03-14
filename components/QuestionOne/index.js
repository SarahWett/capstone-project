export default function Smileys({ formData, setFormData, listOfOptions }) {
  // const [isSmileySelected, setIsSmileySelected] = useState(false);

  function handleOnChange(event) {
    setFormData({ ...formData, smiley: event.target.value });
    // setIsSmileySelected(true);
  }

  // function handleNext() {
  //   onNext();
  // }

  return (
    <>
      {listOfOptions.map((smiley, index) => {
        const { smileyName } = smiley;
        return (
          <label key={index} htmlFor={smileyName}>
            {smileyName}
            <input
              checked={formData.smiley === smileyName}
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
