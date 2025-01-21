import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
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
import { getRequest } from "../services/api";
import { Paper } from "@mui/material";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const DeviceChart = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    uniqueCounts: [],
    cumulativeTweets: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getRequest("api/v1/sample_assignment_api_4/");
        const data = response.data;

        const labels = data.map((item, index) => `${item.date2} ${index + 1}`);
        const uniqueCounts = data.map((item) => item.unique_count);
        const cumulativeTweets = data.map((item) => item.cumulative_tweets);

        setChartData({ labels, uniqueCounts, cumulativeTweets });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const data = {
    labels: chartData.labels,
    datasets: [
      {
        label: "Web Sales",
        data: chartData.uniqueCounts,
        borderColor: "#115DFC",
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 0,
      },
      {
        label: "Offline Selling",
        data: chartData.cumulativeTweets,
        borderColor: "#BAEEFF",
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          font: { size: 14 },
          color: "#555",
        },
      },
      title: {
        display: true,
        text: "Customers by Device",
        font: { size: 18 },
        color: "#333",
      },
    },
    scales: {
      x: {
        display: false, // Hide the X-Axis
      },
      y: {
        ticks: {
          callback: function (value) {
            return value >= 1000 ? `${value / 1000}K` : value;
          },
          color: "#666",
          font: { size: 12 },
        },
        grid: { color: "#e8e8e8" },
        beginAtZero: true,
      },
    },
  };

  return (
    <Paper
      className="chart-container"
      sx={{
        padding: "20px",
        borderRadius: "20px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.05)",
      }}
    >
      <div style={{ height: "350px" }}>
        <Line data={data} options={options} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
          fontSize: "14px",
          color: "#555",
        }}
      >
        <div>
          <span
            style={{
              backgroundColor: "#115DFC",
              borderRadius: "50%",
              width: "10px",
              height: "10px",
              display: "inline-block",
              marginRight: "8px",
            }}
          ></span>
          Web Sales: <strong>{chartData.uniqueCounts.slice(-1)[0] || 0}</strong>
        </div>
        <div>
          <span
            style={{
              backgroundColor: "#BAEEFF",
              borderRadius: "50%",
              width: "10px",
              height: "10px",
              display: "inline-block",
              marginRight: "8px",
            }}
          ></span>
          Offline Selling:{" "}
          <strong>{chartData.cumulativeTweets.slice(-1)[0] || 0}</strong>
        </div>
      </div>
    </Paper>
  );
};

export default DeviceChart;
