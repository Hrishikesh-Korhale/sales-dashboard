import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
  Avatar,
} from "@mui/material";
import { useLocation, Link } from "react-router-dom";
import { Dashboard, Campaign, People, Settings, Group } from "@mui/icons-material";

const Sidebar = () => {
  const location = useLocation(); // Get the current path

  const drawerContent = (
    <Box
      sx={{
        width: 240,
        height: "100%",
        backgroundColor: "#f9fafc",
        p: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        overflowY: "auto",
        overflowX: "hidden",
      }}
    >
      {/* Logo and Top Menu */}
      <Box>
        <Typography
          variant="h6"
          gutterBottom
          sx={{ fontWeight: "bold", color: "#111827" }}
        >
          Salesway
        </Typography>
        <List>
          {[
            { text: "Dashboard", icon: <Dashboard />, path: "/dashboard" },
            { text: "Campaigns", icon: <Campaign />, path: "/dashboard/campaigns" },
            { text: "Flows", icon: <Group />, path: "/dashboard/flows" },
            { text: "Integrations", icon: <Group />, path: "/dashboard/integrations" },
            { text: "Customers", icon: <People />, path: "/dashboard/customers" },
          ].map((item) => (
            <ListItem
              button
              key={item.text}
              component={Link}
              to={item.path}
              sx={{
                borderRadius: 1,
                backgroundColor:
                  location.pathname === item.path ? "#e5f4ff" : "transparent", // Highlight active page
                color: location.pathname === item.path ? "#007bff" : "#374151",
                "&:hover": { backgroundColor: "#f3f4f6" },
              }}
            >
              <ListItemIcon
                sx={{
                  color: location.pathname === item.path ? "#007bff" : "#374151",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{
                  fontSize: "0.9rem",
                  fontWeight: "500",
                }}
              />
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Bottom Section */}
      <Box>
        <List>
          <ListItem
            button
            key="Settings"
            component={Link}
            to="/settings"
            sx={{
              borderRadius: 1,
              backgroundColor:
                location.pathname === "/settings" ? "#e5f4ff" : "transparent",
              color: location.pathname === "/settings" ? "#007bff" : "#374151",
              "&:hover": { backgroundColor: "#f3f4f6" },
            }}
          >
            <ListItemIcon
              sx={{
                color: location.pathname === "/settings" ? "#007bff" : "#374151",
              }}
            >
              <Settings />
            </ListItemIcon>
            <ListItemText
              primary="Settings"
              primaryTypographyProps={{
                fontSize: "0.9rem",
                fontWeight: "500",
              }}
            />
          </ListItem>
        </List>
        <Box sx={{ mt: 2, display: "flex", alignItems: "center" }}>
          <Avatar
            alt="Tom Wang"
            src="https://via.placeholder.com/40"
            sx={{ width: 36, height: 36 }}
          />
          <Typography
            variant="body2"
            sx={{ ml: 2, fontSize: "0.9rem", fontWeight: "500", color: "#374151" }}
          >
            Tom Wang
          </Typography>
        </Box>
      </Box>
    </Box>
  );

  return (
    <Drawer
      variant="permanent"
      open
      sx={{
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
          overflowX: "hidden",
        },
      }}
    >
      {drawerContent}
    </Drawer>
  );
};

export default Sidebar;
