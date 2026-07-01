/**
 * InterviewAnswer interface representing a user's response to a question
 * Captures the response content and metadata for evaluation
 */
export interface InterviewAnswer {
  /** Unique identifier for the answer */
  id: string;

  /** Interview session this answer belongs to */
  sessionId: string;

  /** Question this answer responds to */
  questionId: string;

  /** The user's response content */
  content: string;

  /** Format of the answer */
  format: AnswerFormat;

  /** Timestamp when answer was submitted */
  submittedAt: string;

  /** Time taken in seconds */
  timeTaken: number;

  /** Word count of the answer */
  wordCount: number;

  /** Code submission if this was a coding question */
  codeSubmission?: CodeSubmission;

  /** Audio recording URL if voice response */
  audioUrl?: string;

  /** AI evaluation score for this answer */
  evaluation?: AnswerEvaluation;

  /** User's rating of their own answer */
  selfRating?: number;

  /** Whether user requested a hint */
  hintRequested: boolean;

  /** Number of hints requested */
  hintCount: number;
}

/**
 * Format of the answer submission
 */
export type AnswerFormat = "text" | "code" | "audio" | "mixed";

/**
 * Code submission details for coding questions
 */
export interface CodeSubmission {
  /** Programming language used */
  language: string;

  /** The actual code submitted */
  code: string;

  /** Whether code was executed/tested */
  wasExecuted: boolean;

  /** Execution output if available */
  output?: string;

  /** Whether execution was successful */
  executionSuccess?: boolean;

  /** Time taken for execution in ms */
  executionTime?: number;

  /** Memory used during execution */
  memoryUsed?: number;
}

/**
 * AI evaluation of the answer
 */
export interface AnswerEvaluation {
  /** Overall score (0-100) */
  score: number;

  /** Maximum possible points */
  maxPoints: number;

  /** Detailed feedback on the answer */
  feedback: string;

  /** Strengths identified in the answer */
  strengths: string[];

  /** Areas for improvement */
  improvements: string[];

  /** Technical accuracy score */
  technicalScore?: number;

  /** Communication score */
  communicationScore?: number;

  /** Problem-solving score */
  problemSolvingScore?: number;

  /** Code quality score (if applicable) */
  codeQualityScore?: number;

  /** Timestamp when evaluation was completed */
  evaluatedAt: string;
}
