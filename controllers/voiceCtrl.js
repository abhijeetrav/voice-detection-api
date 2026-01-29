import { fetchAudio } from "../services/audioService.js";

export const detectVoice = async (req, res) => {
  const { audio_url } = req.body;
  if (!audio_url) {
    return res.status(400).json({ error: "audio_url required" });
  }

  await fetchAudio(audio_url);

  return res.json({
    is_ai_generated: false,
    confidence: 0.75,
    language: "en"
  });
};
