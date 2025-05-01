import axios from "axios";

const API_URL = process.env.REACT_APP_API_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

const instance = axios.create({
  baseURL: API_URL,
  headers: {
    "x-api-key": API_KEY,
    Accept: "application/json",
  },
});

export default instance;
