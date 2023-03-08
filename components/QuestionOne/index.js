import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StyledInput = styled.input``;

export default function Smileys({ formData, setFormData }) {
  const [isToggled, setIsToggled] = useState(false);
  const handleToggle = (e) => {
    setIsToggled(!isToggled);
    localStorage.setItem("smileySelection", e.target.value);
  };
  useEffect(() => {
    const storedValue = localStorage.getItem("smileySelection");
    if (storedValue) {
      setFormData({ ...formData, smiley: storedValue });
    }
  }, []);

  return (
    <>
      <label htmlFor="awesome">
        Awesome
        <input
          value={formData.awesome}
          type="radio"
          id="awesome"
          name="radio"
          onClick={handleToggle}
          onChange={(event) =>
            setFormData({ ...formData, smiley: event.target.value })
          }
        />
      </label>
      <label htmlFor="good">
        Good
        <input
          value={formData.good}
          type="radio"
          id="good"
          name="radio"
          onClick={handleToggle}
          onChange={(event) =>
            setFormData({ ...formData, smiley: event.target.value })
          }
        />
      </label>
      <label htmlFor="ok">
        Ok
        <input
          value={formData.ok}
          type="radio"
          id="ok"
          name="radio"
          onClick={handleToggle}
          onChange={(event) =>
            setFormData({ ...formData, smiley: event.target.value })
          }
        />
      </label>
      <label htmlFor="aweful">
        Aweful
        <input
          value={formData.aweful}
          type="radio"
          id="aweful"
          name="radio"
          onClick={handleToggle}
          onChange={(event) =>
            setFormData({ ...formData, smiley: event.target.value })
          }
        />
      </label>
    </>
  );
}
