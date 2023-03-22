import styled from "styled-components";

const StyledTextarea = styled.textarea`
  width: 100%;
`;

const Message = ({ entries, setEntries }) => {
  function handleOnChange(event) {
    const updatedEntry = { ...entries[0], message: event.target.value };
    setEntries([updatedEntry]);
  }
  return (
    <>
      <StyledTextarea
        rows="8"
        value={entries.message}
        type="text"
        id="message"
        name="message"
        required
        onChange={handleOnChange}
      />
    </>
  );
};

export default Message;
