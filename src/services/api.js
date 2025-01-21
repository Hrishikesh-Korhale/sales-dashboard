import axios from "axios";

// Base configuration for API requests
const API = axios.create({
  baseURL: "http://3.111.196.92:8020",
  headers: {
    "Content-Type": "application/json",
  },
});

// Authentication credentials
const auth = {
  username: "trial",
  password: "assignment123",
};

// GET request
export const getRequest = async (endpoint) => {
  try {
    const response = await API.get(endpoint, { auth });
    return response;
  } catch (error) {
    console.error("GET Request Error:", error);
    throw error;
  }
};

// POST request
export const postRequest = async (endpoint, data) => {
  try {
    const response = await API.post(endpoint, data, { auth });
    return response;
  } catch (error) {
    console.error("POST Request Error:", error);
    throw error;
  }
};

// PUT request
export const putRequest = async (endpoint, data) => {
  try {
    const response = await API.put(endpoint, data, { auth });
    return response;
  } catch (error) {
    console.error("PUT Request Error:", error);
    throw error;
  }
};

// DELETE request
export const deleteRequest = async (endpoint) => {
  try {
    const response = await API.delete(endpoint, { auth });
    return response;
  } catch (error) {
    console.error("DELETE Request Error:", error);
    throw error;
  }
};
