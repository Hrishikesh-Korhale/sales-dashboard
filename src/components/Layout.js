import React from "react";
import Sidebar from "./Sidebar";
import { Box } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "whitesmoke",
        minHeight: "100vh",
      }}
    >
      {/* Sidebar */}
      <Box
        component="nav"
        sx={{
          width: { sm: 240 },
          flexShrink: { sm: 0 },
          display: { xs: "none", md: "block" },
        }}
      >
        <Sidebar />
      </Box>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { sm: "auto" },
          overflowX: "hidden",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
