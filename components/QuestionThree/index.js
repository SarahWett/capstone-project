import styled from "styled-components";

const StyledTextarea = styled.textarea`
  width: 100%;
`;

const Message = ({ formData, setFormData }) => {
  function handleOnChange(event) {
    setFormData({ ...formData, message: event.target.value });
  }
  return (
    <>
      <StyledTextarea
        rows="8"
        value={formData.message}
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
