/**
 * InterviewSession interface representing a complete interview session
 * Orchestrates the entire interview flow from start to completion
 */
export interface InterviewSession {
  /** Unique identifier for the session */
  id: string;

  /** User who is taking the interview */
  userId: string;

  /** Company selected for this interview */
  companyId: string;

  /** Interview type selected */
  interviewTypeId: string;

  /** Difficulty level */
  difficulty: "easy" | "medium" | "hard";

  /** Expected duration in minutes */
  expectedDuration: number;

  /** Current status of the session */
  status: SessionStatus;

  /** Timestamp when session was created */
  createdAt: string;

  /** Timestamp when session actually started */
  startedAt?: string;

  /** Timestamp when session was completed */
  completedAt?: string;

  /** Resume used for this interview (if any) */
  resumeId?: string;

  /** Questions in this session */
  questions: SessionQuestion[];

  /** Current question index */
  currentQuestionIndex: number;

  /** Total time elapsed in seconds */
  elapsedTime: number;

  /** Session configuration */
  config: SessionConfig;

  /** Final report generated after completion */
  reportId?: string;

  /** AI interviewer persona used */
  interviewerPersona?: string;
}

/**
 * Status of an interview session
 */
export type SessionStatus =
  | "created" // Session created but not started
  | "in_progress" // Interview currently running
  | "paused" // Interview paused by user
  | "completed" // Interview finished
  | "aborted" // Interview terminated early
  | "expired"; // Session timed out

/**
 * Question as it appears in a session with session-specific data
 */
export interface SessionQuestion {
  /** Question ID */
  questionId: string;

  /** Order in the session */
  order: number;

  /** Whether this question has been answered */
  isAnswered: boolean;

  /** Answer ID if answered */
  answerId?: string;

  /** Time started for this question */
  startedAt?: string;

  /** Time completed for this question */
  completedAt?: string;

  /** Whether user skipped this question */
  isSkipped: boolean;

  /** Number of hints requested */
  hintsRequested: number;
}

/**
 * Configuration for the interview session
 */
export interface SessionConfig {
  /** Whether to allow pausing */
  allowPause: boolean;

  /** Whether to show real-time feedback */
  showRealTimeFeedback: boolean;

  /** Whether to allow hints */
  allowHints: boolean;

  /** Maximum number of hints allowed per question */
  maxHintsPerQuestion: number;

  /** Whether to record audio */
  recordAudio: boolean;

  /** Whether to enable camera */
  enableCamera: boolean;

  /** Time limit for entire session in minutes (null if no limit) */
  sessionTimeLimit?: number;
}
