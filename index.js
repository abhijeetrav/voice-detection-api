import express from "express";
import fetch from "node-fetch";

const app = express();
app.use(express.json());

app.post("/api/voice-detect", async (req, res) => {
  const { audio_url } = req.body;

  if (!audio_url) {
    return res.status(400).json({ error: "audio_url is required" });
  }

  // Dummy response (abhi model baad me add karoge)
  return res.json({
    is_ai_generated: false,
    confidence: 0.75,
    language: "en",
    message:"API is working fine",
    received_url: audio_url
  });
});

app.listen(process.env.PORT || 4000, () => {
  console.log("API running");
  console.log("Listening on port 4000");
});
