import fetch from "node-fetch";

export const fetchAudio = async (url) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Audio fetch failed");
  return true;
};
