import styled from "styled-components";
import { motion } from "framer-motion";

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
      <motion.div
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.75,
        }}
      >
        <StyledTextarea
          rows="8"
          value={entries.message}
          type="text"
          id="message"
          name="message"
          required
          onChange={handleOnChange}
        />
      </motion.div>
    </>
  );
};

export default Message;
