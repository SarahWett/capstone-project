import GlobalStyle from "@/styles";
import Head from "next/head";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";
import { useState, useEffect } from "react";
import Router from "next/router";
import PageLoader from "../components/PageLoader";
import {
  BsEmojiLaughing,
  BsEmojiSmile,
  BsEmojiExpressionless,
  BsEmojiFrown,
} from "react-icons/bs";

export default function App({ Component, pageProps }) {
  const [formData, setFormData] = useLocalStorageState("data", {
    defaultValue: [
      {
        smiley: "awesome",
        tags: ["Family"],

        message: "Wonderfulday comingup!:)",

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

  //REFACTORING
  const listOfSmileyOptions = [
    {
      smileyName: "awesome",
      icon: <BsEmojiLaughing size={"2em"} color={"#252D26"} />,
    },
    {
      smileyName: "good",
      icon: <BsEmojiSmile size={"2em"} color={"#252D26"} />,
    },
    {
      smileyName: "okay",
      icon: <BsEmojiExpressionless size={"2em"} color={"#252D26"} />,
    },
    {
      smileyName: "awful",
      icon: <BsEmojiFrown size={"2em"} color={"#252D26"} />,
    },
  ];

  const listOfTagOptions = [
    { tagName: "Family" },
    { tagName: "Friends" },
    { tagName: "Partner" },
    { tagName: "Work" },
    { tagName: "Hobby" },
    { tagName: "Household" },
    { tagName: "TV" },
    { tagName: "Sports" },
    { tagName: "Walk" },
  ];

  return loading > 1 ? (
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
        listOfSmileyOptions={listOfSmileyOptions}
        listOfTagOptions={listOfTagOptions}
      />
    </>
  );
}
