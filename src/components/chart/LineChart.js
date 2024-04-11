import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import faker from "faker";
import { Text } from "../../utils/constant";
import { useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  interaction: {
    mode: "index",
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
      text: Text.TITLE,
    },
  },
  scales: {
    y: {
      type: "linear",
      display: true,
      position: "left",
    },
    y1: {
      type: "linear",
      display: true,
      position: "right",
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};

const labels = [0, 0.2, 0.4, 0.6, 0.8, 1, 1.2];

const LineChart = () => {
  const [magnitude, setMagnitude] = useState([0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6]);
  const [phase, setPhase] = useState([1.2, 1.1, 1.0, 0.9, 0.8, 0.7, 0.6]);

  // Dùng 2 hàm set để thay đổi data anh nhé

  const [data, setData] = useState({
    labels,
    datasets: [
      {
        label: "Magnitude",
        data: magnitude,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        yAxisID: "y",
      },
      {
        label: "Phase",
        data: phase,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        yAxisID: "y1",
      },
    ],
  });

  return (
    <>
      <div className="mx-4">
        <Line options={options} data={data} />;
      </div>
    </>
  );
};

export default LineChart;
