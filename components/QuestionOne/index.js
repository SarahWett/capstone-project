import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FormButton from "../ForrmButton";

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
          value="awesome"
          type="radio"
          id="awesome"
          name="radio"
          checked={formData.smiley === "awesome"}
          onClick={handleToggle}
          onChange={(event) =>
            setFormData({ ...formData, smiley: event.target.value })
          }
        />
      </label>
      <label htmlFor="good">
        Good
        <input
          value="good"
          type="radio"
          id="good"
          name="radio"
          checked={formData.smiley === "good"}
          onClick={handleToggle}
          onChange={(event) =>
            setFormData({ ...formData, smiley: event.target.value })
          }
        />
      </label>
      <label htmlFor="ok">
        Ok
        <input
          value="ok"
          type="radio"
          id="ok"
          name="radio"
          checked={formData.smiley === "ok"}
          onClick={handleToggle}
          onChange={(event) =>
            setFormData({ ...formData, smiley: event.target.value })
          }
        />
      </label>
      <label htmlFor="aweful">
        Aweful
        <input
          value="aweful"
          type="radio"
          id="aweful"
          name="radio"
          checked={formData.smiley === "aweful"}
          onClick={handleToggle}
          onChange={(event) =>
            setFormData({ ...formData, smiley: event.target.value })
          }
        />
      </label>
    </>
  );
}
