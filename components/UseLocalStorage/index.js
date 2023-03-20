import useLocalStorageState from "use-local-storage-state";

export default function UseLocalStorage() {
  const [formData, setFormData] = useLocalStorageState("formData", {
    defaultValue: {
      smiley: "",
      tags: {
        family: false,
        friends: false,
        partner: false,
        work: false,
        hobby: false,
        household: false,
        tv: false,
        sports: false,
        walk: false,
      },

      message: "",
    },
  });
  return [formData, setFormData];
}
