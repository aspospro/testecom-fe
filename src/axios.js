// src/axios.js
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8000", // Laravel backend URL
  withCredentials: true,            // Needed for Sanctum & cookies
});

export default instance;
