import styled from "styled-components";
import { useState } from "react";
import Smileys from "../QuestionOne";
import Tags from "../QuestionTwo";
import Message from "../QuestionThree";
import Navbar from "../Navigation";
import Link from "next/link";

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
  flex: 20%;
  display: grid;
  place-items: center;
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

const CancelButton = styled.button`
  width: 100px;
  height: 5vh;
  background-color: #b83d8d;
  color: white;
  border-radius: 10px;
  border: 0.5px solid white;
`;

const StyledFooter = styled.div`
  display: flex;
  position: fixed;
  bottom: 0%;
  justify-content: center;
`;

export default function Form() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    smiley: "",
    tags: [],
    message: "",
  });

  const FormTitles = [
    "How are you feeling today?",
    "What did you deal with?",
    "What would you like to say?",
  ];

  const PageDisplay = () => {
    if (page === 0) {
      return <Smileys formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <Tags formData={formData} setFormData={setFormData} />;
    } else {
      return <Message formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <>
      <StyledForm>
        <StyledProgressBar>
          <StyledProgress
            style={{
              width: page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%",
            }}
          ></StyledProgress>
        </StyledProgressBar>
        <StyledFormContainer>
          <div>
            <h1>{FormTitles[page]}</h1>
          </div>
          <div>{PageDisplay()}</div>
          <StyledFooter>
            <button
              disabled={page === 0}
              onClick={(event) => {
                event.preventDefault();
                setPage((currentPage) => currentPage - 1);
              }}
            >
              Prev
            </button>
            <button
              onClick={(event) => {
                event.preventDefault();
                if (page === FormTitles.length - 1) {
                  alert("FORM SUBMITTED!");
                } else {
                  setPage((currentPage) => currentPage + 1);
                }
              }}
            >
              {page === FormTitles.length - 1 ? "Submit" : "Next"}
            </button>
          </StyledFooter>
        </StyledFormContainer>
      </StyledForm>
      <Navbar>
        <Link href="/">
          <CancelButton>CANCEL</CancelButton>
        </Link>
      </Navbar>
    </>
  );
}
