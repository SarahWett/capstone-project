import GlobalStyle from "@/styles";
import Head from "next/head";
import { useState } from "react";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";

export default function App({ Component, pageProps }) {
  const [formData, setFormData] = useLocalStorageState("formData", {
    defaultValue: [
      {
        smiley: "awesome",
        tags: {
          family: true,
          friends: false,
          partner: false,
          work: false,
          hobby: false,
          household: false,
          tv: false,
          sports: false,
          walk: false,
        },

        message: "XXX",
      },
      {
        smiley: "awesome",
        tags: {
          family: true,
          friends: false,
          partner: false,
          work: false,
          hobby: false,
          household: false,
          tv: false,
          sports: false,
          walk: false,
        },

        message: "XXX",
      },
    ],
  });

  const [entries, setEntries] = useState([]);

  function handleAddEntry(newEntry) {
    const date = new Date().toLocaleDateString("en-us", {
      dateStyle: "medium",
    });

    // const newFormData = ;
    setFormData([...formData, { ...entries, date }]);
  }
  console.log(formData);
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Capstone Project</title>
      </Head>
      <Component
        {...pageProps}
        formData={formData}
        setFormData={setFormData}
        onAddEntry={handleAddEntry}
        allEntriesCount={formData.length}
        entries={entries}
        setEntries={setEntries}
      />
    </>
  );
}
