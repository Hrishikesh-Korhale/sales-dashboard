import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  InputAdornment,
} from "@mui/material";
import { AccountCircle, Lock } from "@mui/icons-material";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (username === "trial" && password === "assignment123") {
      // Save authentication token
      sessionStorage.setItem("auth", true);
      navigate("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #007bff, #6c63ff)",
        padding: 2,
      }}
    >
      <Card
        sx={{
          width: 350,
          padding: 4,
          boxShadow: 4,
          borderRadius: 3,
          backgroundColor: "#ffffff",
          textAlign: "center",
        }}
      >
        {/* Logo or Title */}
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: "#007bff",
            mb: 2,
            textTransform: "uppercase",
          }}
        >
          Welcome Back
        </Typography>
        <Typography variant="body1" sx={{ color: "#6b7280", mb: 3 }}>
          Please login to continue
        </Typography>

        {/* Login Form */}
        <Box
          component="form"
          onSubmit={handleLogin}
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          {/* Username Field */}
          <TextField
            label="Username"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />

          {/* Password Field */}
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock />
                </InputAdornment>
              ),
            }}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              textTransform: "none",
              fontWeight: "bold",
              fontSize: "1rem",
              transition: "background-color 0.3s",
              "&:hover": {
                backgroundColor: "#0056b3",
              },
            }}
          >
            Login
          </Button>
        </Box>

        {/* Footer */}
        <Typography
          variant="body2"
          sx={{
            mt: 3,
            color: "#9ca3af",
            fontSize: "0.9rem",
          }}
        >
          © 2025 Salesway. All rights reserved.
        </Typography>
      </Card>
    </Box>
  );
};

export default Login;
