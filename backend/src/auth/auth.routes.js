import express from "express";
import { register, login, adminLogin } from "./auth.controller.js";

const router = express.Router();

// User routes
router.post("/register", register);
router.post("/login", login);

// Admin route
router.post("/admin/login", adminLogin);

export default router;
