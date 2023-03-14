import { useState, useEffect } from "react";
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

  const [message, setMessage] = useState("");

  useEffect(() => {
    const storedMessage = localStorage.getItem("message");
    if (storedMessage) {
      setMessage(storedMessage);
    }
  }, []);

  const handelMessage = (value) => {
    setMessage(value);
    setFormData({ ...formData, message: value });
    localStorage.setItem("message", value);
  };

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
          <div>
            <StyledSavedText>Saved!</StyledSavedText>
          </div>
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
                    // ||
                    // (page === 1 && !isValid) ||
                    // (page === 0 && !isAtLeastOneChecked)
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
