/**
 * DashboardStats interface representing aggregated statistics
 * Used for displaying user progress and performance metrics on dashboard
 */
export interface DashboardStats {
  /** User ID these stats belong to */
  userId: string;

  /** Resume completion status */
  resumeStatus: ResumeStatusStats;

  /** Interview streak information */
  interviewStreak: InterviewStreakStats;

  /** Total interview statistics */
  totalInterviews: TotalInterviewStats;

  /** Performance metrics */
  performance: PerformanceStats;

  /** Recent activity summary */
  recentActivity: RecentActivityStats;

  /** Timestamp when stats were last calculated */
  calculatedAt: string;
}

/**
 * Resume status statistics
 */
export interface ResumeStatusStats {
  /** Whether resume is uploaded */
  isUploaded: boolean;

  /** Resume processing status */
  status: "not_uploaded" | "pending" | "processing" | "completed" | "failed";

  /** Completion percentage (0-100) */
  completionPercentage: number;

  /** Filename if uploaded */
  filename?: string;

  /** Number of skills identified */
  skillsIdentified?: number;

  /** Number of experience entries parsed */
  experienceCount?: number;
}

/**
 * Interview streak statistics
 */
export interface InterviewStreakStats {
  /** Current streak in days */
  currentStreak: number;

  /** Longest streak achieved */
  longestStreak: number;

  /** Whether streak is active (interviewed today) */
  isActive: boolean;

  /** Last interview date */
  lastInterviewDate: string;

  /** Streak milestone achieved */
  milestone?: number;
}

/**
 * Total interview statistics
 */
export interface TotalInterviewStats {
  /** Total number of interviews completed */
  totalCount: number;

  /** Number of interviews this week */
  thisWeek: number;

  /** Number of interviews this month */
  thisMonth: number;

  /** Breakdown by company */
  byCompany: CompanyInterviewCount[];

  /** Breakdown by interview type */
  byType: TypeInterviewCount[];

  /** Breakdown by difficulty */
  byDifficulty: DifficultyInterviewCount[];
}

/**
 * Performance statistics
 */
export interface PerformanceStats {
  /** Average score across all interviews (0-100) */
  averageScore: number;

  /** Highest score achieved */
  highestScore: number;

  /** Lowest score achieved */
  lowestScore: number;

  /** Recent trend (improving/stable/declining) */
  trend: "improving" | "stable" | "declining";

  /** Percentage change from previous period */
  percentageChange: number;

  /** Average time per interview in minutes */
  averageTimePerInterview: number;

  /** Breakdown by skill category */
  bySkillCategory: SkillCategoryStats[];
}

/**
 * Recent activity statistics
 */
export interface RecentActivityStats {
  /** Recent interview sessions */
  recentInterviews: RecentInterviewSummary[];

  /** Upcoming scheduled interviews */
  upcomingInterviews?: UpcomingInterview[];

  /** Achievements unlocked */
  achievements?: Achievement[];
}

/**
 * Interview count by company
 */
export interface CompanyInterviewCount {
  /** Company ID */
  companyId: string;

  /** Company name */
  companyName: string;

  /** Number of interviews */
  count: number;

  /** Average score for this company */
  averageScore: number;
}

/**
 * Interview count by type
 */
export interface TypeInterviewCount {
  /** Interview type ID */
  typeId: string;

  /** Interview type name */
  typeName: string;

  /** Number of interviews */
  count: number;

  /** Average score for this type */
  averageScore: number;
}

/**
 * Interview count by difficulty
 */
export interface DifficultyInterviewCount {
  /** Difficulty level */
  difficulty: "easy" | "medium" | "hard";

  /** Number of interviews */
  count: number;

  /** Average score for this difficulty */
  averageScore: number;
}

/**
 * Performance by skill category
 */
export interface SkillCategoryStats {
  /** Skill category name */
  category: string;

  /** Average score (0-100) */
  averageScore: number;

  /** Trend direction */
  trend: "up" | "down" | "stable";

  /** Number of interviews assessing this skill */
  interviewCount: number;
}

/**
 * Summary of a recent interview
 */
export interface RecentInterviewSummary {
  /** Interview ID */
  interviewId: string;

  /** Company name */
  companyName: string;

  /** Interview type */
  interviewType: string;

  /** Score achieved */
  score: number;

  /** Date of interview */
  date: string;

  /** Difficulty level */
  difficulty: string;
}

/**
 * Upcoming scheduled interview
 */
export interface UpcomingInterview {
  /** Scheduled interview ID */
  interviewId: string;

  /** Company name */
  companyName: string;

  /** Interview type */
  interviewType: string;

  /** Scheduled date/time */
  scheduledAt: string;

  /** Difficulty level */
  difficulty: string;
}

/**
 * Achievement unlocked by user
 */
export interface Achievement {
  /** Achievement ID */
  id: string;

  /** Achievement title */
  title: string;

  /** Description */
  description: string;

  /** Icon for the achievement */
  icon: string;

  /** Date unlocked */
  unlockedAt: string;

  /** Rarity level */
  rarity: "common" | "rare" | "epic" | "legendary";
}
