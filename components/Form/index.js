import { useState, useEffect } from "react";
import "material-symbols";
import Smileys from "../QuestionOne";
import Tags from "../QuestionTwo";
import Message from "../QuestionThree";
import Navbar from "../Navigation";
import Link from "next/link";
import { useRouter } from "next/router";
import FormButton from "../ForrmButton";
import {
  StyledForm,
  StyledFooter,
  StyledFormContainer,
  StyledHeader,
  StyledSavedText,
  StyledPageDisplay,
  StyledProgress,
  StyledProgressBar,
  CancelButton,
  StyledSavedTextContainer,
  StyledConfirmButton,
} from "./StyledForm";
import {
  BsEmojiLaughing,
  BsEmojiSmile,
  BsEmojiExpressionless,
  BsEmojiFrown,
} from "react-icons/bs";
import { uid } from "uid";

export default function Form({
  formData,
  setFormData,
  onAddEntry,
  entries,
  setEntries,
  handleAddEntry,
  id,
  listOfSmileyOptions,
}) {
  const [page, setPage] = useState(0);

  const [showSavedPage, setShowSavedPage] = useState(false);

  const FormTitles = [
    "How are you feeling today?",
    "What did you deal with?",
    "Please write what first comes into your mind thinking of today:",
  ];

  const [checkedCheckbox, setCheckedCheckbox] = useState({
    isChecked: [],
  });

  const PageDisplay = () => {
    if (page === 0) {
      return (
        <>
          <Smileys
            formData={formData}
            entries={entries}
            setEntries={setEntries}
            setFormData={setFormData}
            onAddEntry={handleAddEntry}
            listOfSmileyOptions={[
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
                smileyName: "aweful",
                icon: <BsEmojiFrown size={"2em"} color={"#252D26"} />,
              },
            ]}
          />

          <StyledFooter>
            <FormButton
              type="button"
              onAddEntry={handleAddEntry}
              disabled={!entries[0]?.smiley}
              onClick={() => {
                setPage((currentPage) => currentPage + 1);
              }}
            >
              Next
            </FormButton>
          </StyledFooter>
        </>
      );
    } else if (page === 1) {
      return (
        <>
          <Tags
            formData={formData}
            setFormData={setFormData}
            entries={entries}
            id={id}
            setEntries={setEntries}
            onAddEntry={handleAddEntry}
            listOfOptions={[
              { tagName: "Family" },
              { tagName: "Friends" },
              { tagName: "Partner" },
              { tagName: "Work" },
              { tagName: "Hobby" },
              { tagName: "Household" },
              { tagName: "TV" },
              { tagName: "Sports" },
              { tagName: "Walk" },
            ]}
          />
          <StyledFooter>
            <FormButton
              type="button"
              disabled={page === 0}
              onClick={() => {
                setPage((currentPage) => currentPage - 1);
              }}
            >
              Prev
            </FormButton>
            <FormButton
              type="button"
              disabled={page === FormTitles.length - 1 || entries[0]?.tags < 1}
              onClick={() => {
                setPage((currentPage) => currentPage + 1);
              }}
            >
              Next
            </FormButton>
          </StyledFooter>
        </>
      );
    } else {
      return (
        <>
          {" "}
          <Message
            formData={formData}
            entries={entries}
            setEntries={setEntries}
            setFormData={setFormData}
            onAddEntry={handleAddEntry}
          />
          <StyledFooter>
            <FormButton
              type="button"
              disabled={page === 0}
              onClick={() => {
                setPage((currentPage) => currentPage - 1);
              }}
            >
              Prev
            </FormButton>
            <StyledConfirmButton
              type="submit"
              disabled={page !== FormTitles.length - 1}
            >
              Confirm
            </StyledConfirmButton>
          </StyledFooter>
        </>
      );
    }
  };

  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();

    onAddEntry();
    setShowSavedPage(true);

    setTimeout(() => {
      setShowSavedPage(false);
      setEntries([{ smiley: "", tags: [], message: "" }]);
      router.push("/");
    }, 2000);
  }
  return (
    <>
      {showSavedPage ? (
        <>
          <StyledSavedTextContainer>
            <StyledSavedText>Saved!</StyledSavedText>
            <span>
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 21C14.0822 21 16.1 20.278 17.7095 18.9571C19.3191 17.6362 20.4209 15.798 20.8271 13.7558C21.2333 11.7136 20.9188 9.59376 19.9373 7.75743C18.9558 5.9211 17.3679 4.48191 15.4442 3.68508C13.5205 2.88826 11.38 2.78311 9.38744 3.38754C7.3949 3.99197 5.67358 5.26858 4.51677 6.99987C3.35997 8.73115 2.83925 10.81 3.04334 12.8822C3.24743 14.9543 4.1637 16.8916 5.63604 18.364"
                  stroke="#E6E4E3"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M16 10L12.402 14.3175C11.7465 15.1042 11.4187 15.4976 10.9781 15.5176C10.5375 15.5375 10.1755 15.1755 9.45139 14.4514L8 13"
                  stroke="#E6E4E3"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </StyledSavedTextContainer>
          <Navbar />
        </>
      ) : (
        <>
          <StyledForm onSubmit={handleSubmit}>
            <StyledProgressBar>
              <StyledProgress
                style={{
                  width: page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%",
                }}
              ></StyledProgress>
            </StyledProgressBar>
            <StyledFormContainer>
              <div>
                <StyledHeader>{FormTitles[page]}</StyledHeader>
              </div>
              <StyledPageDisplay>{PageDisplay()}</StyledPageDisplay>
            </StyledFormContainer>
          </StyledForm>
          <Navbar>
            <Link href="/">
              <CancelButton type="button">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM7.29289 16.7071C6.90237 16.3166 6.90237 15.6834 7.29289 15.2929L10.5858 12L7.29289 8.70711C6.90237 8.31658 6.90237 7.68342 7.29289 7.29289C7.68342 6.90237 8.31658 6.90237 8.70711 7.29289L12 10.5858L15.2929 7.29289C15.6834 6.90237 16.3166 6.90237 16.7071 7.29289C17.0976 7.68342 17.0976 8.31658 16.7071 8.70711L13.4142 12L16.7071 15.2929C17.0976 15.6834 17.0976 16.3166 16.7071 16.7071C16.3166 17.0976 15.6834 17.0976 15.2929 16.7071L12 13.4142L8.70711 16.7071C8.31658 17.0976 7.68342 17.0976 7.29289 16.7071Z"
                    fill="white"
                  />
                </svg>
                CANCEL
              </CancelButton>
            </Link>
          </Navbar>
        </>
      )}
    </>
  );
}
