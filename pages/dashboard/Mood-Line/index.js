import LineChart from "@/components/LineChart";
import { Heading } from "@/components/Header/StyledHeader";
import Navbar from "@/components/Navigation";
import AddButton from "@/components/AddButton";
import BackButton from "@/components/BackButton";
import HomeButton from "@/components/HomeButton";
import { useState } from "react";
import styled from "styled-components";

const StyledChart = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(8.1px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  margin-top: 5vh;
  width: 100%;
  height: 58vh;
`;

const StyledDateSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-size: 0.7rem;
  margin-top: 1vh;
`;

const StyledLineChart = styled.div`
  margin-top: 7vh;
`;

export default function MoodLine({ formData }) {
  const [startDate, setStartDate] = useState(new Date("2023-03-01"));
  const [endDate, setEndDate] = useState(new Date());

  const filteredData = formData.filter((entry) => {
    const entryDate = new Date(entry.date);
    return (
      (!startDate || entryDate >= startDate) &&
      (!endDate || entryDate <= endDate)
    );
  });

  const countBySmiley = filteredData.reduce((acc, entry) => {
    if (!acc[entry.smiley]) {
      acc[entry.smiley] = 0;
    }
    acc[entry.smiley]++;
    return acc;
  }, {});

  const SMILEY_LABELS = ["aweful", "okay", "good", "awesome"];

  const SMILEY_COLORS = {
    awesome: "#5C705E",
    good: "#849A86",
    okay: "#CEA450",
    aweful: "#FF675C",
  };

  const chartData = {
    labels: filteredData.map((entry) =>
      new Date(entry.date).toLocaleDateString()
    ),
    datasets: [
      {
        label: "Mood",
        data: filteredData.map((entry) => SMILEY_LABELS.indexOf(entry.smiley)),
        backgroundColor: filteredData.map(
          (entry) => SMILEY_COLORS[entry.smiley]
        ),
      },
    ],
  };

  return (
    <>
      <Heading>Your Mood-Line:</Heading>
      <StyledChart>
        <StyledDateSection>
          <label>Start Date:</label>
          <input
            type="date"
            value={startDate.toISOString().substr(0, 10)}
            onChange={(event) => setStartDate(new Date(event.target.value))}
          />
        </StyledDateSection>
        <StyledDateSection>
          <label>End Date:</label>
          <input
            type="date"
            value={endDate.toISOString().substr(0, 10)}
            onChange={(event) => setEndDate(new Date(event.target.value))}
          />
        </StyledDateSection>
        <StyledLineChart>
          <LineChart
            chartData={chartData}
            options={{
              scales: {
                y: {
                  ticks: {
                    callback: (value, index) => SMILEY_LABELS[index],
                  },
                },
              },
            }}
          />
        </StyledLineChart>
      </StyledChart>
      <Navbar>
        <BackButton />
        <AddButton />
        <HomeButton />
      </Navbar>
    </>
  );
}
