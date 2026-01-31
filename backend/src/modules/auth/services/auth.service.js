/**
 * Auth Service
 * Business logic for authentication operations
 * Separates business logic from controllers
 */

import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import generateToken from "../../../core/utils/generateToken.js";

export class AuthService {
  /**
   * Register a new user
   */
  async registerUser(userData) {
    const { name, email, password } = userData;

    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      throw new Error("User already exists");
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role: "user",
    });

    // Generate token
    const token = generateToken(user._id, user.role);

    return {
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    };
  }

  /**
   * Login user
   */
  async loginUser(credentials) {
    const { email, password } = credentials;

    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("Invalid credentials");
    }

    // Verify password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error("Invalid credentials");
    }

    // Generate token
    const token = generateToken(user._id, user.role);

    return {
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    };
  }

  /**
   * Admin login - only for users with admin role
   */
  async loginAdmin(credentials) {
    const { email, password } = credentials;

    // Find admin - support both role: "admin" and isAdmin: true
    const admin = await User.findOne({
      email,
      $or: [
        { role: "admin" },
        { isAdmin: true }
      ]
    });
    
    if (!admin) {
      throw new Error("Admin access denied. Not an admin user.");
    }

    // Verify password
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      throw new Error("Invalid admin credentials");
    }

    // Generate token
    const token = generateToken(admin._id, admin.role || "admin");

    return {
      message: "Admin login successful",
      token,
      admin: {
        _id: admin._id,
        name: admin.name,
        email: admin.email,
        role: admin.role || "admin",
        isAdmin: true
      },
    };
  }
}

export default new AuthService();
