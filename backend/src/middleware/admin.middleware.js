const adminMiddleware = (req, res, next) => {
  // authMiddleware should run first and populate req.user
  if (!req.user) {
    return res.status(401).json({ message: "Authentication required" });
  }

  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Access denied. Admin only." });
  }

  next();
};

export default adminMiddleware;
