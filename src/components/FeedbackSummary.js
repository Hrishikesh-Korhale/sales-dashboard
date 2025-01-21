import React, { useEffect, useState } from "react";
import { Box, Typography, Stack, Paper } from "@mui/material";
import { getRequest } from "../services/api";

const FeedbackSummary = () => {
  const [feedback, setFeedback] = useState({
    positive: 0,
    neutral: 0,
    negative: 0,
  });

  useEffect(() => {
    const fetchFeedback = async () => {
      getRequest("api/v1/sample_assignment_api_5/")
        .then((response) => {
          setFeedback(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchFeedback();
  }, []);

  const totalFeedback =
    feedback.positive + feedback.neutral + feedback.negative;

  const sentiment =
    feedback.positive > feedback.neutral &&
    feedback.positive > feedback.negative
      ? "Mostly Positive"
      : feedback.neutral > feedback.negative
      ? "Neutral"
      : "Mostly Negative";

  return (
    <Paper
      elevation={3}
      sx={{
        // width: '100%',
        padding: 3,
        borderRadius: 2,
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#ffffff",
        fontFamily: "Arial, sans-serif",
        marginTop: "20px",
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2 }}>
        Community Feedback
      </Typography>
      <Typography
        variant="body1"
        sx={{ fontWeight: "600", marginBottom: 3, color: "#555" }}
      >
        {sentiment}
      </Typography>

      {/* Progress Bar */}
      <Box
        sx={{
          display: "flex",
          height: 10,
          borderRadius: 5,
          overflow: "hidden",
          marginBottom: 3,
        }}
      >
        <Box
          sx={{
            width: `${(feedback.negative / totalFeedback) * 100}%`,
            backgroundColor: "#ff6b6b",
          }}
        ></Box>
        <Box
          sx={{
            width: `${(feedback.neutral / totalFeedback) * 100}%`,
            backgroundColor: "#ffa502",
          }}
        ></Box>
        <Box
          sx={{
            width: `${(feedback.positive / totalFeedback) * 100}%`,
            backgroundColor: "#4caf50",
          }}
        ></Box>
      </Box>

      {/* Feedback Stats */}
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ fontSize: 14, color: "#666" }}
      >
        <Typography>Negative: {feedback.negative}</Typography>
        <Typography>Neutral: {feedback.neutral}</Typography>
        <Typography>Positive: {feedback.positive}</Typography>
      </Stack>
    </Paper>
  );
};

export default FeedbackSummary;
