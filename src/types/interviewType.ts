/**
 * InterviewType interface representing categories of interviews
 * Defines the structure and focus of different interview formats
 */
export interface InterviewType {
  /** Unique identifier for the interview type */
  id: string;

  /** Display name of the interview type */
  name: string;

  /** Short description of what this interview covers */
  description: string;

  /** Icon identifier for UI display */
  icon: string;

  /** Category grouping */
  category: "technical" | "behavioral" | "hr" | "system_design";

  /** Average duration in minutes */
  defaultDuration: number;

  /** Difficulty levels available for this type */
  availableDifficulties: ("easy" | "medium" | "hard")[];

  /** Key skills assessed in this interview type */
  assessedSkills: string[];

  /** Number of question templates available */
  questionCount: number;

  /** Whether this type is currently active/available */
  isActive: boolean;

  /** Sort order for display */
  sortOrder: number;
}

/**
 * Interview type configuration with specific settings
 */
export interface InterviewTypeConfig {
  /** Interview type ID */
  typeId: string;

  /** Number of questions to include */
  questionCount: number;

  /** Time limit per question in minutes (null if no limit) */
  timePerQuestion?: number;

  /** Whether to allow follow-up questions */
  allowFollowUp: boolean;

  /** Whether to provide hints during interview */
  allowHints: boolean;

  /** Evaluation criteria weights */
  evaluationWeights: EvaluationWeights;
}

/**
 * Weights for different evaluation criteria
 */
export interface EvaluationWeights {
  /** Weight for technical accuracy */
  technicalAccuracy: number;

  /** Weight for communication skills */
  communication: number;

  /** Weight for problem-solving approach */
  problemSolving: number;

  /** Weight for code quality (if applicable) */
  codeQuality?: number;

  /** Weight for confidence/presentation */
  confidence: number;
}
