import dotenv from "dotenv";
import express from "express";
import OpenAI from "openai"; // Updated import for v4

dotenv.config();

const router = express.Router();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
}); // Updated way to create the client

try {
  router.route("/").get((req, res) => {
    res.send("Hello from DALLE-E");
  });
} catch (error) {
  console.error("Error initializing OpenAI API:", error);
}

export default router;