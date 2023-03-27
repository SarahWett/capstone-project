import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export default function BarChart({ chartData, options }) {
  return <Bar data={chartData} options={options} />;
}
