import Navbar from "../components/Navigation";
import { Heading } from "../components/Header/StyledHeader";
import TextParagraph from "../components/TextParagraph";
import NavItems from "../components/NavItems/index.js";
import { motion } from "framer-motion";

export default function Home({ formData, setFormdata, onAddEntry }) {
  return (
    <main>
      <Heading>MoodMeUp</Heading>

      <motion.div
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.75,
        }}
        className="nav-bar"
      >
        <TextParagraph>How are you doing today?</TextParagraph>
      </motion.div>
      <Navbar>
        <NavItems />
      </Navbar>
    </main>
  );
}
