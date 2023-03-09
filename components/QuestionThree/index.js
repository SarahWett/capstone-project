import styled from "styled-components";

const StyledTextarea = styled.textarea`
  width: 100%;
`;

const Message = ({ formData, setFormData }) => {
  return (
    <>
      <StyledTextarea
        rows="10"
        value={formData.message}
        type="text"
        id="message"
        name="message"
        onChange={(event) =>
          setFormData({ ...formData, message: event.target.value })
        }
      />
    </>
  );
};

export default Message;
