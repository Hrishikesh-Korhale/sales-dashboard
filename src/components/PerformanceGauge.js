import React, { useEffect, useState } from "react";
import { getRequest } from "../services/api";
import SemiCircularProgressBar from "react-progressbar-semicircle";
import { Box, Typography, Button, Paper, Divider } from "@mui/material";

const PerformanceGauge = () => {
  const [score, setScore] = useState(null);

  useEffect(() => {
    const fetchScore = async () => {
      try {
        const response = await getRequest("api/v1/sample_assignment_api_3/");
        setScore(response.data.score);
      } catch (error) {
        console.log(error);
      }
    };

    fetchScore();
  }, []);

  const percentage = score !== null ? (score / 100) * 100 : 0;

  return (
    <Paper
      elevation={3}
      sx={{
        p: 3,
        borderRadius: "16px",
        textAlign: "center",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <>
        {/* Semi-Circular Progress Bar */}
        <Box sx={{ mb: 2 }}>
          <SemiCircularProgressBar
            percentage={percentage}
            stroke="#0066FF"
            strokeWidth={10}
            background="#E0E0E0"
            rounded
            showPercentValue
          />
        </Box>

        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {score} of 100 points
        </Typography>
        <Divider sx={{ my: 3 }} />
        {/* Feedback Message */}
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: "medium", mt: 1, color: "#333" }}
        >
          You’re good!
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Your sales performance score is better than 80% other users
        </Typography>

        {/* Improve Button */}
        <Box>
          <Button
            variant="outlined"
            sx={{
              textTransform: "none",
              borderColor: "rgba(0, 0, 0, 0.23)",
              color: "rgba(0, 0, 0, 0.87)",
              borderRadius: "20px",
              py: 0.5,
              fontSize: "0.875rem",
              lineHeight: 1.75,
              mt: 3,
            }}
            onClick={() => alert("Improvement plan coming soon!")}
          >
            Improve your score
          </Button>
        </Box>
      </>
    </Paper>
  );
};

export default PerformanceGauge;
