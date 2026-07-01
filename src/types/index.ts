/**
 * Central export file for all TypeScript interfaces
 * Import types from here for cleaner imports throughout the application
 */

// User types
export type { User, UserPreferences } from "./user";

// Resume types
export type {
  Resume,
  ResumeStatus,
  ParsedResumeData,
  WorkExperience,
  Education,
  Project,
  Certification,
} from "./resume";

// Company types
export type { Company, CompanyInterviewPattern } from "./company";

// Interview type types
export type { InterviewType, InterviewTypeConfig, EvaluationWeights } from "./interviewType";

// Interview question types
export type {
  InterviewQuestion,
  QuestionType,
  FollowUpQuestion,
  QuestionStats,
} from "./interviewQuestion";

// Interview answer types
export type {
  InterviewAnswer,
  AnswerFormat,
  CodeSubmission,
  AnswerEvaluation,
} from "./interviewAnswer";

// Interview session types
export type {
  InterviewSession,
  SessionStatus,
  SessionQuestion,
  SessionConfig,
} from "./interviewSession";

// Score breakdown types
export type {
  ScoreBreakdown,
  TechnicalScore,
  CommunicationScore,
  ProblemSolvingScore,
  BehavioralScore,
  CodeQualityScore,
  ConfidenceScore,
  SkillScore,
} from "./scoreBreakdown";

// Interview report types
export type {
  InterviewReport,
  QuestionAnalysis,
  ReportSummary,
  PerformanceComparison,
} from "./interviewReport";

// Dashboard stats types
export type {
  DashboardStats,
  ResumeStatusStats,
  InterviewStreakStats,
  TotalInterviewStats,
  PerformanceStats,
  RecentActivityStats,
  CompanyInterviewCount,
  TypeInterviewCount,
  DifficultyInterviewCount,
  SkillCategoryStats,
  RecentInterviewSummary,
  UpcomingInterview,
  Achievement,
} from "./dashboardStats";
