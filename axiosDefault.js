const axios = require("axios");
const axiosDefault = axios.create({
  base: "https://api.example.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
