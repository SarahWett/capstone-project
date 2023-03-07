import React, { useState } from "react";

export default function Smileys({ formData, setFormData }) {
  const [isToggled, setIsToggled] = useState(false);
  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

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
