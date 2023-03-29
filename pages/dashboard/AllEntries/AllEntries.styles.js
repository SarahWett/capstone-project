import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 48px;
`;

export const StyledEntries = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  & > * {
    order: -1;
  }
`;

export const StyledBatch = styled.div`
  border: 1 px solid black;
  background-color: white;
  display: flex;
  gap: 8px;
  justify-content: center;
  text-transform: uppercase;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  transition: background-color 0.2s ease-in-out;
  background-color: rgba(140, 144, 122, 0.4);
  margin: 10px 30px;
  padding: 10px 16px;
  border-radius: 999px;
  border-bottom: 2px solid #8c907a;
`;

export const StyledFilter = styled.div`
  display: flex;
  justify-content: center;
  position: sticky;
  top: 3vh;
  z-index: 200;
`;

export const StyledSelect = styled.select`
  border-radius: 22px;
  border: 1px solid #ececea;
  padding: 2vw;
  background-color: #d7b470;
  width: 35vw;
`;
