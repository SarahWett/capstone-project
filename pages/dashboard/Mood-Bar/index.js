import { useState } from "react";
import BarChart from "@/components/BarChart";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
} from "chart.js";
import { Heading } from "@/components/Header/StyledHeader";
import Navbar from "@/components/Navigation";
import BackButton from "@/components/BackButton";
import HomeButton from "@/components/HomeButton";
import AddButton from "@/components/AddButton";
import styled from "styled-components";
import { keyframes } from "styled-components";
import { motion } from "framer-motion";

Chart.register(CategoryScale, LinearScale, BarController, BarElement);

const SliderAnimation = keyframes`
slide-in {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}`;

const Slider = styled.div`
  animation: ${SliderAnimation} 0.5s ease-out;
`;

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

const StyledBar = styled.div`
  margin-top: 7vh;
`;

const StyledPara = styled.p`
  font-size: 0.9rem;
  font-family: "Corbel", sans-serif;
  align-self: center;
  text-align: center;
  margin-top: 3vh;
  padding: 2vh;
  width: 90vw;
  border-radius: 20px;
  background-color: #ececea;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;

export default function MoodBar({ formData }) {
  const [startDate, setStartDate] = useState(new Date("2023-03-01"));
  const [endDate, setEndDate] = useState(new Date());
  const filteredData = formData.filter((entry) => {
    const entryDate = new Date(entry.date);
    return (
      (!startDate || entryDate >= startDate) &&
      (!endDate || entryDate <= endDate)
    );
  });

  let mostClickedSmiley = "";
  const countBySmiley = filteredData.reduce((acc, entry) => {
    if (!acc[entry.smiley]) {
      acc[entry.smiley] = 0;
    }
    acc[entry.smiley]++;
    const entries = Object.entries(acc);
    const mostClicked = entries.reduce((a, b) => (a[1] > b[1] ? a : b));
    mostClickedSmiley = mostClicked[0];
    return acc;
  }, {});

  const SMILEY_COLORS = {
    awesome: "#5C705E",
    good: "#849A86",
    okay: "#CEA450",
    awful: "#FF675C",
  };

  const options = {
    scales: {
      y: {
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
    labels: ["awesome", "good", "okay", "awful"],
    datasets: [
      {
        label: "Mood",
        data: [
          countBySmiley.awesome || 0,
          countBySmiley.good || 0,
          countBySmiley.okay || 0,
          countBySmiley.awful || 0,
        ],
        backgroundColor: [
          SMILEY_COLORS.awesome,
          SMILEY_COLORS.good,
          SMILEY_COLORS.okay,
          SMILEY_COLORS.awful,
        ],
      },
    ],
  };

  const mostClickedSmileyColor = SMILEY_COLORS[mostClickedSmiley];

  return (
    <Slider>
      <Heading aria-labelledby="barchart">Your Mood-Bar:</Heading>
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
              aria-label="starting date"
              type="date"
              value={startDate.toISOString().substr(0, 10)}
              onChange={(event) => setStartDate(new Date(event.target.value))}
            />
          </StyledDateSection>
          <StyledDateSection>
            <label>End Date:</label>
            <input
              aria-label="ending date"
              type="date"
              value={endDate.toISOString().substr(0, 10)}
              onChange={(event) => setEndDate(new Date(event.target.value))}
            />
          </StyledDateSection>
          <StyledBar>
            <BarChart id="barchart" chartData={chartData} options={options} />
          </StyledBar>
          <StyledPara>
            In this period of time your mood was most:{" "}
            <span style={{ color: mostClickedSmileyColor }}>
              {mostClickedSmiley}
            </span>
          </StyledPara>
        </StyledChart>
      </motion.div>
      <Navbar>
        <BackButton />
        <AddButton />
        <HomeButton />
      </Navbar>
    </Slider>
  );
}
