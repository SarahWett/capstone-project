import GlobalStyle from "@/styles";
import Head from "next/head";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";
import { useState, useEffect } from "react";
import Router from "next/router";
import PageLoader from "../components/PageLoader";

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

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // Used for page transition
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  return loading ? (
    <PageLoader />
  ) : (
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
