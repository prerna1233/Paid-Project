/**
 * Global Error Handler Middleware
 * Centralized error handling for the entire application
 */

export const errorHandler = (err, req, res, next) => {
  console.error("❌ Error:", err);

  // Default error status and message
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  // Send error response
  res.status(statusCode).json({
    success: false,
    error: {
      message,
      ...(process.env.NODE_ENV === "development" && { stack: err.stack })
    }
  });
};

/**
 * Not Found Handler
 * Handles 404 errors for undefined routes
 */
export const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  error.statusCode = 404;
  next(error);
};
