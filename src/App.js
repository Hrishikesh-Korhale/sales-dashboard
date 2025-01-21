import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Routes>
        {/* Login Page (No Sidebar) */}
        <Route path="/" element={<Login />} />

        {/* Pages with Sidebar */}
        <Route
          path="/dashboard/*"
          element={
            <Layout>
              <Routes>
                <Route path="/" element={<Dashboard />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
