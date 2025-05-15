import express from "express";
const router = express.Router();
import { register, login } from "../controllers/authController.js";
import { authenticate } from "../middlewares/auth.js";

router.post("/register", register);
router.post("/login", authenticate, login);

export default router;
