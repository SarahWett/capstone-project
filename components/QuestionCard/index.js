import Form from "../Form";
import Navbar from "../Navigation";
import { StyledQuestionCard } from "./QuestionCard.styles";

export default function QuestionCard() {
  return (
    <>
      <StyledQuestionCard>
        How do you feel today ?
        <Form />
      </StyledQuestionCard>
      <Navbar />
    </>
  );
}
