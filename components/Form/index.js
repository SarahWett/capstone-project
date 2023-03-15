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
} from "./StyledForm";
import useLocalStorageState from "use-local-storage-state";

export default function Form({}) {
  const [page, setPage] = useState(0);

  const [formData, setFormData] = useLocalStorageState("formData", {
    defaultValue: {
      smiley: "",
      tags: {
        family: false,
        friends: false,
        partner: false,
        work: false,
        hobby: false,
        household: false,
        tv: false,
        sports: false,
        walk: false,
      },

      message: "",
    },
  });

  console.log(formData);

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
        <Smileys
          formData={formData}
          setFormData={setFormData}
          listOfOptions={[
            { smileyName: "awesome" },
            { smileyName: "good" },
            { smileyName: "okay" },
            { smileyName: "aweful" },
          ]}
        />
      );
    } else if (page === 1) {
      return (
        <Tags
          formData={formData}
          setFormData={setFormData}
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
      );
    } else {
      return <Message formData={formData} setFormData={setFormData} />;
    }
  };

  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    // onAddEntry(data);

    setShowSavedPage(true);

    setTimeout(() => {
      setShowSavedPage(false);
      setFormData({
        smiley: "",
        tags: [],
        message: "",
      });

      router.push("/");
    }, 2000);

    // setCheckedRadioSmiley({ isChecked: "" });
    setCheckedCheckbox({ isChecked: [] });
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
                  stroke="#B83D8D"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M16 10L12.402 14.3175C11.7465 15.1042 11.4187 15.4976 10.9781 15.5176C10.5375 15.5375 10.1755 15.1755 9.45139 14.4514L8 13"
                  stroke="#B83D8D"
                  stroke-width="2"
                  stroke-linecap="round"
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
                  type="submit"
                  disabled={page !== FormTitles.length - 1}
                >
                  Confirm
                </FormButton>

                <FormButton
                  type="button"
                  disabled={
                    page === FormTitles.length - 1 || formData.smiley < 1
                  }
                  onClick={() => {
                    setPage((currentPage) => currentPage + 1);
                  }}
                >
                  Next
                </FormButton>
              </StyledFooter>
            </StyledFormContainer>
          </StyledForm>
          <Navbar>
            <Link href="/">
              <CancelButton type="button">CANCEL</CancelButton>
            </Link>
          </Navbar>
        </>
      )}
    </>
  );
}
