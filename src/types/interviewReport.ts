/**
 * InterviewReport interface representing the comprehensive report
 * Generated after an interview session is completed
 */
export interface InterviewReport {
  /** Unique identifier for the report */
  id: string;

  /** Interview session this report belongs to */
  sessionId: string;

  /** User who took the interview */
  userId: string;

  /** Company interviewed for */
  companyId: string;

  /** Interview type */
  interviewTypeId: string;

  /** Difficulty level */
  difficulty: "easy" | "medium" | "hard";

  /** Overall score (0-100) */
  overallScore: number;

  /** Performance category */
  performanceCategory: "excellent" | "good" | "satisfactory" | "needs_improvement";

  /** Detailed score breakdown */
  scoreBreakdown: ScoreBreakdown;

  /** Question-by-question analysis */
  questionAnalysis: QuestionAnalysis[];

  /** Overall feedback summary */
  summary: ReportSummary;

  /** Strengths identified */
  strengths: string[];

  /** Areas for improvement */
  improvements: string[];

  /** Recommended next steps */
  recommendations: string[];

  /** Comparison with previous interviews */
  comparison?: PerformanceComparison;

  /** Timestamp when report was generated */
  generatedAt: string;

  /** Whether user has viewed this report */
  isViewed: boolean;

  /** User's rating of the interview experience */
  userRating?: number;

  /** User's feedback on the interview */
  userFeedback?: string;
}

/**
 * Import ScoreBreakdown from scoreBreakdown.ts
 */
export interface ScoreBreakdown {
  overallScore: number;
  technical: any;
  communication: any;
  problemSolving: any;
  confidence: any;
}

/**
 * Analysis of each question in the interview
 */
export interface QuestionAnalysis {
  /** Question ID */
  questionId: string;

  /** Question text */
  questionText: string;

  /** User's answer */
  userAnswer: string;

  /** Score for this question (0-100) */
  score: number;

  /** Maximum possible points */
  maxPoints: number;

  /** Time taken in seconds */
  timeTaken: number;

  /** Feedback on this specific answer */
  feedback: string;

  /** Whether answer was satisfactory */
  isSatisfactory: boolean;

  /** Key points covered */
  keyPointsCovered: string[];

  /** Points missed */
  pointsMissed: string[];
}

/**
 * Summary section of the report
 */
export interface ReportSummary {
  /** Brief overview of performance */
  overview: string;

  /** Key highlights from the interview */
  highlights: string[];

  /** Critical areas needing attention */
  criticalAreas: string[];

  /** Overall assessment */
  assessment: string;
}

/**
 * Comparison with previous performance
 */
export interface PerformanceComparison {
  /** Previous interview score */
  previousScore: number;

  /** Current interview score */
  currentScore: number;

  /** Percentage change (positive = improvement) */
  percentageChange: number;

  /** Areas that improved */
  improvedAreas: string[];

  /** Areas that declined */
  declinedAreas: string[];

  /** Trend over last N interviews */
  trend: "improving" | "stable" | "declining";
}
