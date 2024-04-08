import axios from "axios";

const { apiKey } = require("../constants");

const client = axios.create({
  headers: {
    Authorization: "Bearer " + apiKey,
    "Content-Type": "application/json",
  },
});

const chatGptEndpoint = "https://api.openai.com/v1/chat/completions";
const dalleEndpoint = "https://api.openai.com/v1/images/generations";
