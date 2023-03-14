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

export default function Form({}) {
  const [page, setPage] = useState(0);
  //Keeping track of user input:
  const [formData, setFormData] = useState({
    smiley: "",
    tags: [],
    message: "",
  });
  console.log(formData);

  const [smileySelection, setSmileySelection] = useState("");
  const [tagSelection, setTagSelection] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const storedSmiley = localStorage.getItem("smileySelection");
    if (storedSmiley) {
      setSmileySelection(storedSmiley);
    }

    const storedTag = localStorage.getItem("tagSelection");
    if (storedTag) {
      setTagSelection(storedTag.split(","));
    }

    const storedMessage = localStorage.getItem("message");
    if (storedMessage) {
      setMessage(storedMessage);
    }
  }, []);

  const handleSmileySelection = (value) => {
    setSmileySelection(value);
    setFormData({ ...formData, smiley: value });
    localStorage.setItem("smileySelection", value);
  };

  //   const handleTagSelection = (value, isChecked) => {
  //     if (isChecked) {
  //       setTagSelection([...tagSelection, value]);
  //       setFormData({ ...formData, tags: [...formData.tags, value] });
  //       localStorage.setItem(
  //         "tagSelection",
  //         JSON.stringify([...tagSelection, value])
  //       );
  //     } else {
  //       const newTagSelection = tagSelection.filter((tag) => tag !== value);
  //       setTagSelection(newTagSelection);
  //       setFormData({ ...formData, tags: newTagSelection });
  //       localStorage.setItem("tagSelection", JSON.   stringify(newTagSelection));
  //     }
  //   };
  const handleTagSelection = (value, isChecked) => {
    if (isChecked) {
      setTagSelection([...tagSelection, value]);
      setFormData((prevFormData) => ({
        ...prevFormData,
        tags: [...prevFormData.tags, value],
      }));
      localStorage.setItem(
        "tagSelection",
        JSON.stringify([...tagSelection, value])
      );
    } else {
      const newTagSelection = tagSelection.filter((tag) => tag !== value);
      setTagSelection(newTagSelection);
      setFormData((prevFormData) => ({
        ...prevFormData,
        tags: newTagSelection,
      }));
      localStorage.setItem("tagSelection", JSON.stringify(newTagSelection));
    }
  };

  const handelMessage = (value) => {
    setMessage(value);
    setFormData({ ...formData, message: value });
    localStorage.setItem("message", value);
  };

  const [showSavedPage, setShowSavedPage] = useState(false);

  const FormTitles = [
    "How are you feeling today?",
    "What did you deal with?",
    "What would you like to say?",
  ];
  //   State to reset radio input after submit:
  //   const [checkedRadioSmiley, setCheckedRadioSmiley] = useState({
  //     isChecked: "",
  //   });

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
          smileySelection={smileySelection}
          setSmileySelection={handleSmileySelection}
          //   checkedRadio={checkedRadioSmiley}
          //   setCheckedRadio={setCheckedRadioSmiley}
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
          tagSelection={tagSelection}
          setTagSelection={handleTagSelection}
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
