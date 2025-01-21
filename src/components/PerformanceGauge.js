import React, { useEffect, useState } from "react";
import { getRequest } from "../services/api";
import {
  Box,
  Typography,
  Button,
  Paper,
  Divider,
  CircularProgress,
} from "@mui/material";

const CircularProgressWithLabel = ({ value }) => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-flex",
      }}
    >
      <CircularProgress
        variant="determinate"
        value={value}
        size={120}
        thickness={5}
        sx={{
          color: "#0066FF",
          backgroundColor: "#E0E0E0",
          borderRadius: "50%",
          position: "relative",
        }}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="caption" component="div" color="text.primary">
          {`${Math.round(value)}%`}
        </Typography>
      </Box>
    </Box>
  );
};

const PerformanceGauge = () => {
  const [score, setScore] = useState(null);

  useEffect(() => {
    const fetchScore = async () => {
      try {
        const response = await getRequest("api/v1/sample_assignment_api_3/");
        setScore(response.data.score);
      } catch (error) {
        console.error("Error fetching score:", error);
      }
    };

    fetchScore();
  }, []);

  const percentage = score !== null ? Math.min((score / 100) * 100, 100) : 0;

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
      {/* Circular Progress with Label */}
      <Box sx={{ mb: 2 }}>
        <CircularProgressWithLabel value={percentage} />
      </Box>

      {/* Score Information */}
      <Typography variant="body2" sx={{ color: "text.secondary" }}>
        {score !== null ? `${score} of 100 points` : "Loading..."}
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
        Your sales performance score is better than 80% of other users
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
    </Paper>
  );
};

export default PerformanceGauge;
