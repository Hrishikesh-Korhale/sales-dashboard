import React, { useEffect, useState } from "react";
import { CardContent, Typography, Grid, Paper } from "@mui/material";
import { getRequest } from "../services/api";

const StatsCards = () => {
  const [stats, setStats] = useState({});

  useEffect(() => {
    const fetchStats = async () => {
      getRequest("api/v1/sample_assignment_api_1/")
        .then((response) => {
          setStats(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchStats();
  }, []);

  const formatNumber = (number) => {
    if (!number) return "0";
    const formattedNumber = Number(number).toLocaleString("en-US");
    if (number >= 1000) {
      return `${(number / 1000).toFixed(1)}K`;
    }
    return formattedNumber;
  };

  return (
    <Grid container spacing={3} justifyContent="center">
      {/* Purchases Card */}
      <Grid item xs={12} sm={4}>
        <Paper
          sx={{
            borderRadius: "10px",
            boxShadow: "1px 4px 12px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
          }}
        >
          <CardContent>
            <Typography variant="subtitle2" color="textSecondary">
              Purchases
            </Typography>
            <Typography variant="h6" fontWeight="bold" mt={2}>
              {stats.purchases || "0"}
              <span
                style={{
                  display: "inline-block",
                  backgroundColor: "rgba(46, 204, 113, 0.2)",
                  color: "#2ecc71",
                  padding: "6px 12px",
                  margin: "4px",
                  borderRadius: "12px",
                  fontSize: "8px",
                  fontWeight: "bold",
                }}
              >
                +32% ⬆️
              </span>
            </Typography>
          </CardContent>
        </Paper>
      </Grid>

      {/* Revenue Card */}
      <Grid item xs={12} sm={4}>
        <Paper
          sx={{
            borderRadius: "10px",
            boxShadow: "1px 4px 12px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
          }}
        >
          <CardContent>
            <Typography variant="subtitle2" color="textSecondary">
              Revenue
            </Typography>
            <Typography variant="h6" fontWeight="bold" mt={2}>
              ${formatNumber(stats.revenue)}
              <span
                style={{
                  display: "inline-block",
                  backgroundColor: "rgba(46, 204, 113, 0.2)",
                  color: "#2ecc71",
                  padding: "6px 12px",
                  margin: "4px",
                  borderRadius: "12px",
                  fontSize: "8px",
                  fontWeight: "bold",
                }}
              >
                +49% ⬆️
              </span>
            </Typography>
          </CardContent>
        </Paper>
      </Grid>

      {/* Refunds Card */}
      <Grid item xs={12} sm={4}>
        <Paper
          sx={{
            borderRadius: "10px",
            boxShadow: "1px 4px 12px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
          }}
        >
          <CardContent>
            <Typography variant="subtitle2" color="textSecondary">
              Refunds
            </Typography>
            <Typography variant="h6" fontWeight="bold" mt={2}>
              ${formatNumber(stats.refunds)}
              <span
                style={{
                  display: "inline-block",
                  backgroundColor: "rgba(231, 76, 60, 0.2)",
                  color: "#e74c3c",
                  padding: "6px 12px",
                  margin: "4px",
                  borderRadius: "12px",
                  fontSize: "8px",
                  fontWeight: "bold",
                }}
              >
                +7% ⬇️
              </span>
            </Typography>
          </CardContent>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default StatsCards;
