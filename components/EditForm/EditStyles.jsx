import styled from "styled-components";

export const StyledTextarea = styled.textarea`
  width: 90vw;
  padding: 5vw;
  margin: 5vw;
`;

export const StyledEditFormContainer = styled.div`
  width: 360px;
  height: 150vh400px;
  padding: 3vw;
  border-radius: 8px;
  box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.41);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
`;
