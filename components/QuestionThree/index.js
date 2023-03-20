import styled from "styled-components";

const StyledTextarea = styled.textarea`
  width: 100%;
`;

const Message = ({ entries, setEntries }) => {
  function handleOnChange(event) {
    setEntries({ ...entries, message: event.target.value });
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
