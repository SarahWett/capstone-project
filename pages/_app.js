import GlobalStyle from "@/styles";
import Head from "next/head";
import { useState } from "react";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";

export default function App({ Component, pageProps }) {
  const [formData, setFormData] = useLocalStorageState("data", {
    defaultValue: [
      {
        smiley: "awesome",
        tags: ["Family"],

        message: "FooBar",

        date: new Date().toLocaleDateString("en-us", {
          dateStyle: "medium",
        }),

        id: uid(),
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

  const [entries, setEntries] = useLocalStorageState("currentEntry", {
    defaultValue: [
      {
        smiley: "",
        tags: [],
        message: "",
      },
    ],
  });

  function handleAddEntry(newEntry) {
    const date = new Date().toLocaleDateString("en-us", {
      dateStyle: "medium",
    });
    const id = uid();

    setFormData([...formData, { ...entries[0], id, date }]);
  }

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
