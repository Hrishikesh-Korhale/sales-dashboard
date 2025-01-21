import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Box, Select, MenuItem, Typography } from "@mui/material";

// Register necessary Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ComparisonChart = () => {
  const [timeRange, setTimeRange] = useState("6months");

  // Define data for different time ranges
  const dataForSixMonths = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Last Year",
        data: [5000, 10000, 20000, 32000, 12000, 13000],
        backgroundColor: "#BAEEFF",
        borderRadius: 5,
        barThickness: 20,
      },
      {
        label: "This Year",
        data: [6000, 2000, 40000, 21000, 9200, 8700],
        backgroundColor: "#115DFC",
        borderRadius: 5,
        barThickness: 20,
      },
    ],
  };

  const dataForOneYear = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Last Year",
        data: [
          5000, 10000, 20000, 32000, 12000, 13000, 14000, 16000, 18000, 22000,
          24000, 26000,
        ],
        backgroundColor: "#BAEEFF",
        borderRadius: 5,
        barThickness: 20,
      },
      {
        label: "This Year",
        data: [
          6000, 2000, 40000, 21000, 9200, 8700, 15000, 20000, 17000, 23000,
          25000, 28000,
        ],
        backgroundColor: "#115DFC",
        borderRadius: 5,
        barThickness: 20,
      },
    ],
  };

  const data = timeRange === "6months" ? dataForSixMonths : dataForOneYear;

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        stacked: false,
        grid: {
          display: false,
        },
        barPercentage: 0.5,
        categoryPercentage: 0.8,
      },
      y: {
        grid: {
          display: true,
        },
        ticks: {
          callback: (value) => {
            if (value >= 1000) {
              return `${value / 1000}K`;
            }
            return value;
          },
        },
      },
    },
  };

  return (
    <Box sx={{ mt: 5 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
          Comparison
        </Typography>
        <Select
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
          sx={{ mb: 2, borderRadius: "20px",  fontSize: "0.875rem", }}
          size="small"
        >
          <MenuItem value="6months">6 months</MenuItem>
          <MenuItem value="1year">1 year</MenuItem>
        </Select>
      </Box>
      <Bar data={data} options={options} />
    </Box>
  );
};

export default ComparisonChart;
