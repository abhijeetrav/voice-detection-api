export const auth = (req, res, next) => {
  if (req.headers.authorization !== "Bearer SECRET123") {
    return res.status(401).json({ error: "Unauthorized" });
  }
  next();
};
