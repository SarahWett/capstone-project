import { useState } from "react";

const Message = ({ formData, setFormData }) => {
  return (
    <>
      <label htmlFor="message">Is there something else you wanna add ?</label>
      <textarea
        value={formData.message}
        type="text"
        id="message"
        name="message"
        rows="5"
        onChange={(event) =>
          setFormData({ ...formData, message: event.target.value })
        }
      />
    </>
  );
};

export default Message;
