/**
 * User interface representing a registered user in the system
 * Designed to scale with authentication, profile management, and subscription features
 */
export interface User {
  /** Unique identifier for the user (UUID from backend) */
  id: string;

  /** User's full name for personalized experience */
  name: string;

  /** User's email address (unique, used for authentication) */
  email: string;

  /** Profile avatar URL (optional, can be default) */
  avatar?: string;

  /** User's current subscription tier */
  subscriptionTier: "free" | "pro" | "enterprise";

  /** Timestamp when user account was created */
  createdAt: string;

  /** Last timestamp when user was active */
  lastActiveAt: string;

  /** User preferences for interview settings */
  preferences?: UserPreferences;

  /** Flag indicating if user has completed onboarding */
  hasCompletedOnboarding: boolean;
}

/**
 * User preferences for customizing interview experience
 */
export interface UserPreferences {
  /** Preferred difficulty level for interviews */
  defaultDifficulty: "easy" | "medium" | "hard";

  /** Preferred interview duration in minutes */
  defaultDuration: 15 | 30 | 45;

  /** Whether to receive email notifications */
  emailNotifications: boolean;

  /** Theme preference for the application */
  theme: "dark" | "light" | "system";
}
