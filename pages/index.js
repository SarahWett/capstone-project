import styled from "styled-components";
import Head from "next/head";
import Navbar from "@/components/Navigation";
import { Heading } from "@/components/Header/StyledHeader";
import TextParagraph from "@/components/TextParagraph";
import NavItems from "@/components/NavItems/index.js";

export default function Home({ formData, setFormdata, onAddEntry }) {
  return (
    <main>
      <Heading>MoodMeUp</Heading>
      <TextParagraph>How are you doing today?</TextParagraph>
      <Navbar>
        <NavItems />
      </Navbar>
    </main>
  );
}
