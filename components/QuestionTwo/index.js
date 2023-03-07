import { useState } from "react";

export default function Tags({ formData, setFormData }) {
  const [isChecked, setIsChecked] = useState(false);
  const checkHandler = () => {
    setIsChecked(!isChecked);
  };
  return (
    <>
      <label htmlFor="family">Family</label>
      <input
        value={formData.family}
        type="checkbox"
        id="family"
        name="tags"
        checked={isChecked}
        onChange={checkHandler}
      />
      <label htmlFor="sports">Sports</label>
      <input
        value={formData.sports}
        type="checkbox"
        id="sports"
        name="tags"
        onChange={(event) =>
          setFormData({ ...formData, sports: event.target.value })
        }
      />
      <label htmlFor="walk">Walk</label>
      <input
        value={formData.walk}
        type="checkbox"
        id="walk"
        name="tags"
        onChange={(event) =>
          setFormData({ ...formData, walk: event.target.value })
        }
      />

      <label htmlFor="friends">Friends</label>
      <input
        value={formData.walk}
        type="checkbox"
        id="friends"
        name="tags"
        onChange={(event) =>
          setFormData({ ...formData, friends: event.target.value })
        }
      />

      <label htmlFor="work">Work</label>
      <input
        value={formData.walk}
        type="checkbox"
        id="work"
        name="tags"
        onChange={(event) =>
          setFormData({ ...formData, work: event.target.value })
        }
      />

      <label htmlFor="partner">Partner</label>
      <input
        value={formData.walk}
        type="checkbox"
        id="partner"
        name="tags"
        onChange={(event) =>
          setFormData({ ...formData, partner: event.target.value })
        }
      />

      <label htmlFor="hobby">Hobby</label>
      <input
        value={formData.walk}
        type="checkbox"
        id="hobby"
        name="tags"
        onChange={(event) =>
          setFormData({ ...formData, hobby: event.target.value })
        }
      />
    </>
  );
}
