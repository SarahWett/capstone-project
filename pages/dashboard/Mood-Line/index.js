import LineChart from "@/components/LineChart";
import { Heading } from "@/components/Header/StyledHeader";
import Navbar from "@/components/Navigation";
import AddButton from "@/components/AddButton";
import BackButton from "@/components/BackButton";
import HomeButton from "@/components/HomeButton";
import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

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

  const SMILEY_LABELS = ["awful", "okay", "good", "awesome"];

  const SMILEY_COLORS = {
    awesome: "#5C705E",
    good: "#849A86",
    okay: "#CEA450",
    awful: "#FF675C",
  };

  const options = {
    animations: {
      tension: {
        duration: 4000,
        easing: "linear",
        from: 1,
        to: 0,
        loop: false,
      },
    },
    scales: {
      y: {
        ticks: {
          callback: function (value, index, values) {
            return SMILEY_LABELS[value];
          },
          stepSize: 1,
          min: 0,
          max: 3,
        },
        grid: {
          display: true,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },

    plugins: {
      legend: {
        display: false,
      },
    },
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
      <motion.div
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.75,
        }}
        className="nav-bar"
      >
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
            <LineChart chartData={chartData} options={options} />
          </StyledLineChart>
        </StyledChart>
      </motion.div>
      <Navbar>
        <BackButton />
        <AddButton />
        <HomeButton />
      </Navbar>
    </>
  );
}
