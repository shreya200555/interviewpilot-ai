/**
 * InterviewQuestion interface representing a single interview question
 * Supports various question types and difficulty levels
 */
export interface InterviewQuestion {
  /** Unique identifier for the question */
  id: string;

  /** Question text */
  text: string;

  /** Question type/format */
  type: QuestionType;

  /** Difficulty level */
  difficulty: "easy" | "medium" | "hard";

  /** Category/topic */
  category: string;

  /** Subcategory for more specific classification */
  subcategory?: string;

  /** Skills required to answer this question */
  requiredSkills: string[];

  /** Expected time to answer in minutes */
  expectedTime: number;

  /** Maximum points possible for this question */
  maxPoints: number;

  /** Sample answer or key points (for evaluation) */
  sampleAnswer?: string;

  /** Evaluation criteria specific to this question */
  evaluationCriteria?: string[];

  /** Follow-up questions that can be asked */
  followUpQuestions?: FollowUpQuestion[];

  /** Code snippet if this is a coding question */
  codeSnippet?: string;

  /** Language for coding questions */
  language?: string;

  /** Company-specific questions (null if general) */
  companyId?: string;

  /** Interview type this question belongs to */
  interviewTypeId: string;

  /** Whether this question is currently active */
  isActive: boolean;

  /** Usage statistics */
  stats?: QuestionStats;
}

/**
 * Types of interview questions
 */
export type QuestionType =
  | "text" // Open-ended text response
  | "code" // Coding/programming question
  | "multiple_choice" // Multiple choice selection
  | "system_design" // System design/architecture
  | "behavioral" // Behavioral/situational
  | "hr"; // HR/general questions

/**
 * Follow-up question that can be asked based on initial response
 */
export interface FollowUpQuestion {
  /** Follow-up question text */
  text: string;

  /** Condition that triggers this follow-up */
  triggerCondition: string;

  /** Expected response keywords */
  expectedKeywords?: string[];
}

/**
 * Usage statistics for a question
 */
export interface QuestionStats {
  /** Number of times this question has been used */
  usageCount: number;

  /** Average score received for this question */
  averageScore: number;

  /** Average time taken to answer */
  averageTime: number;
}
