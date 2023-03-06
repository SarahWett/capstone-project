import styled from "styled-components";
import Head from "next/head";
import Navbar from "@/components/Navigation";
import { Heading } from "./../components/Header/index.js";
import TextParagraph from "@/components/TextParagraph/index.js";

export default function Home() {
  return (
    <main>
      <Heading>MoodMeUp</Heading>
      <TextParagraph>How are you doing today?</TextParagraph>
      <Navbar />
    </main>
  );
}
