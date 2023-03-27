import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export default function LineChart({ chartData, options }) {
  return <Line data={chartData} options={options} />;
}
