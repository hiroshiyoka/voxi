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

export const apiCall = async (prompt, messages) => {
  try {
    const result = await client.post(chatGptEndpoint, {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `Does this message want to generate an AI picture, image, art or anything similar? ${prompt} . Simply answer with a yes or no.`,
        },
      ],
    });

    let isArt = result.data?.choices[0]?.message?.content;

    if (isArt.toLowerCase().includes("yes")) {
      console.log("DALL-E API Call");
    } else {
      console.log("ChatGPT API Call");
    }
  } catch (error) {
    console.log("Error: ", error);
    return Promise.resolve({ success: false, message: error.message });
  }
};
