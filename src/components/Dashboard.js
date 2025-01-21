import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import StatsCards from "./StatsCards";
import ComparisonChart from "./ComparisonChart";
import PerformanceGauge from "./PerformanceGauge";
import DeviceChart from "./DeviceChart";
import ProductsTable from "./ProductsTable";
import FeedbackSummary from "./FeedbackSummary";
import { Box, Grid, Paper, Typography } from "@mui/material";

const Dashboard = () => {
  const navigate = useNavigate();

  // Authentication check
  useEffect(() => {
    if (!sessionStorage.getItem("auth")) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <Box display="flex">
      {/* Main Content */}
      <Box sx={{ flexGrow: 1, p: 2 }}>
        <Grid container spacing={2}>
          {/* Left Column */}
          <Grid item xs={12} md={8}>
            <Paper sx={{ p: 2, borderRadius: "20px" }}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                Dashboard
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <StatsCards />
                </Grid>
                <Grid item xs={12}>
                  <ComparisonChart />
                </Grid>
                <Grid item xs={12}>
                  <ProductsTable />
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          {/* Right Column */}
          <Grid item xs={12} md={4}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <PerformanceGauge />
              </Grid>
              <Grid item xs={12}>
                <DeviceChart />
              </Grid>
              <Grid item xs={12}>
                <FeedbackSummary />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
