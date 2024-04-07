import axios from "axios";

const { apiKey } = require("../constants");

const client = axios.create({
  headers: {
    Authorization: "Bearer " + apiKey,
    "Content-Type": "application/json",
  },
});
