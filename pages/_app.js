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
        tags: ["Family"],

        message: "FooBar",

        date: new Date().toLocaleDateString("en-us", {
          dateStyle: "medium",
        }),
      },
    ],
  });

  const allEntries = [
    {
      smiley: "awesome",
      tag: ["Family"],
      message: "Hello World",
    },
  ];

  const [entries, setEntries] = useState({
    smiley: "",
    tags: [],
    message: "",
  });

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
        allEntriesCount={0}
        entries={entries}
        setEntries={setEntries}
      />
    </>
  );
}
