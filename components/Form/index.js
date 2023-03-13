import styled from "styled-components";
import { useState, useEffect } from "react";
import Smileys from "../QuestionOne";
import Tags from "../QuestionTwo";
import Message from "../QuestionThree";
import Navbar from "../Navigation";
import Link from "next/link";
import { useRouter } from "next/router";
import FormButton from "../ForrmButton";

const StyledForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledFormContainer = styled.div`
  width: 360px;
  height: 400px;
  border-radius: 8px;
  box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  background: rgba(199, 87, 160, 0.05);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(199, 87, 160, 0.59);
`;

const StyledHeader = styled.h1`
  display: grid;
  place-items: center;
  padding: 1vh 5vh 1vh 5vh;
  margin: 0;
  color: #172e4f;
`;

const StyledProgressBar = styled.div`
  width: 375px;
  height: 10px;
  background-color: white;
  margin-bottom: 50px;
`;

const StyledProgress = styled.div`
  width: 33.3%;
  height: 100%;
  background-color: #b83d8d;
`;

const StyledPageDisplay = styled.div`
  padding: 2vh 5vh 2vh 5vh;
  line-height: 5vh;
`;

const CancelButton = styled.button`
  width: 100px;
  height: 5vh;
  background-color: #b83d8d;
  color: white;
  border-radius: 10px;
  border: 0.5px solid white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;

const StyledFooter = styled.div`
  display: flex;
  position: fixed;
  bottom: 0%;
  align-self: center;
`;

const StyledSavedText = styled.h1`
  padding: 15vh;
  margin: 0;
  color: #172e4f;
  width: 360px;
  height: 400px;
  border-radius: 8px;
  box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.4);
  display: flex;
  background: rgba(199, 87, 160, 0.05);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(199, 87, 160, 0.59);
`;

export default function Form({}) {
  const [page, setPage] = useState(0);
  //Keeping track of user input:
  const [formData, setFormData] = useState({
    smiley: "",
    tags: [],
    message: "",
  });
  console.log(formData);

  const [showSavedPage, setShowSavedPage] = useState(false);

  const FormTitles = [
    "How are you feeling today?",
    "What did you deal with?",
    "What would you like to say?",
  ];
  //State to reset radio input after submit:
  const [checkedRadioSmiley, setCheckedRadioSmiley] = useState({
    isChecked: "",
  });

  const [checkedCheckbox, setCheckedCheckbox] = useState({
    isChecked: [],
  });

  const PageDisplay = () => {
    if (page === 0) {
      return (
        <Smileys
          formData={formData}
          setFormData={setFormData}
          name="radio"
          checkedRadio={checkedRadioSmiley}
          setCheckedRadio={setCheckedRadioSmiley}
          required={true}
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
          name="checkbox"
          checkedCheckbox={checkedCheckbox}
          setCheckedCheckbox={setCheckedCheckbox}
          required={true}
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

    setCheckedRadioSmiley({ isChecked: "" });
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
                    page === FormTitles.length - 1
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