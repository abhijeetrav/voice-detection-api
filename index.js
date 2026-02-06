
import express from "express";

const app = express();

// IMPORTANT: base64 audio ke liye limit badhani padti hai
app.use(express.json({ limit: "20mb" }));

// Health check
app.get("/", (req, res) => {
  res.send("API LIVE");
});

// Voice detect API (Base64 supported)
app.post("/api/voice-detect", async (req, res) => {
  // const { audio_base64, audio_format } = req.body;
  //edited code are below 18-21
  const audio_base64 =
  req.body.audio_base64 || req.body.audio_base64_format;

const { audio_format } = req.body;


  // Validation
  if (!audio_base64) {
    return res.status(400).json({
      error: "audio_base64 is required"
    });
  }

  if (!audio_format) {
    return res.status(400).json({
      error: "audio_format is required (example: mp3)"
    });
  }

  // OPTIONAL: Basic base64 check
  const isBase64 =
    /^[A-Za-z0-9+/=]+$/.test(audio_base64.substring(0, 100));

  if (!isBase64) {
    return res.status(400).json({
      error: "Invalid Base64 audio format"
    });
  }

  // Dummy AI result (baad me model add karna)
  return res.json({
    is_ai_generated: false,
    confidence: 0.78,
    language: "hi-en",
    audio_format: audio_format,
    message: "Base64 audio received successfully"
  });
});

// Server start
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log("API running");
  console.log(`Listening on port ${PORT}`);
});
