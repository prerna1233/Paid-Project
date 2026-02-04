/**
 * Auth Service
 * Business logic for authentication operations
 * Separates business logic from controllers
 */

import bcrypt from "bcryptjs";
import User from "./user.model.js";
import generateToken from "../utils/generateToken.js";

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

  /**
   * Get user profile
   */
  async getUserProfile(userId) {
    const user = await User.findById(userId).select("-password");
    
    if (!user) {
      throw new Error("User not found");
    }

    return {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt
    };
  }

  /**
   * Update user profile (name and email)
   */
  async updateUserProfile(userId, updateData) {
    const { name, email } = updateData;

    // Find user
    const user = await User.findById(userId);
    if (!user) {
      throw new Error("User not found");
    }

    // If email is being changed, check if new email already exists
    if (email && email !== user.email) {
      const emailExists = await User.findOne({ email });
      if (emailExists) {
        throw new Error("Email already in use by another account");
      }
      user.email = email;
    }

    // Update name if provided
    if (name) {
      user.name = name;
    }

    await user.save();

    return {
      message: "Profile updated successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    };
  }

  /**
   * Change user password
   */
  async changePassword(userId, passwordData) {
    const { currentPassword, newPassword } = passwordData;

    // Validate input
    if (!currentPassword || !newPassword) {
      throw new Error("Current password and new password are required");
    }

    if (newPassword.length < 6) {
      throw new Error("New password must be at least 6 characters long");
    }

    // Find user
    const user = await User.findById(userId);
    if (!user) {
      throw new Error("User not found");
    }

    // Verify current password
    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) {
      throw new Error("Current password is incorrect");
    }

    // Hash new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();

    return {
      message: "Password changed successfully"
    };
  }

  /**
   * Delete user account
   */
  async deleteUserAccount(userId) {
    const user = await User.findById(userId);
    
    if (!user) {
      throw new Error("User not found");
    }

    // Prevent admin deletion through this endpoint
    if (user.role === "admin") {
      throw new Error("Admin accounts cannot be deleted through this endpoint");
    }

    await User.findByIdAndDelete(userId);

    return {
      message: "Account deleted successfully"
    };
  }
}

export default new AuthService();
