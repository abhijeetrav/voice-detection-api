import express from "express";
import { auth } from "../middleware/auth.js";
import { detectVoice } from "../controllers/voiceCtrl.js";
router.post("/voice-detect", auth, detectVoice);
const router = express.Router();

router.post("/voice-detect", detectVoice);

export default router;
