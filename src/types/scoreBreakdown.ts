/**
 * ScoreBreakdown interface representing detailed scoring metrics
 * Provides granular analysis across different evaluation dimensions
 */
export interface ScoreBreakdown {
  /** Unique identifier for this breakdown */
  id: string;

  /** Overall aggregate score (0-100) */
  overallScore: number;

  /** Technical skills assessment */
  technical: TechnicalScore;

  /** Communication skills assessment */
  communication: CommunicationScore;

  /** Problem-solving assessment */
  problemSolving: ProblemSolvingScore;

  /** Behavioral/soft skills assessment */
  behavioral?: BehavioralScore;

  /** Code quality assessment (if applicable) */
  codeQuality?: CodeQualityScore;

  /** Confidence level assessment */
  confidence: ConfidenceScore;

  /** Timestamp when scores were calculated */
  calculatedAt: string;
}

/**
 * Technical skills scoring breakdown
 */
export interface TechnicalScore {
  /** Overall technical score (0-100) */
  score: number;

  /** Accuracy of technical content */
  accuracy: number;

  /** Depth of technical knowledge */
  depth: number;

  /** Breadth of technical knowledge */
  breadth: number;

  /** Specific technical skills assessed */
  skills: SkillScore[];

  /** Areas where technical knowledge was strong */
  strengths: string[];

  /** Technical areas needing improvement */
  weaknesses: string[];
}

/**
 * Communication skills scoring breakdown
 */
export interface CommunicationScore {
  /** Overall communication score (0-100) */
  score: number;

  /** Clarity of expression */
  clarity: number;

  /** Conciseness of responses */
  conciseness: number;

  /** Structure and organization of answers */
  structure: number;

  /** Use of appropriate terminology */
  terminology: number;

  /** Active listening skills */
  listening: number;
}

/**
 * Problem-solving skills scoring breakdown
 */
export interface ProblemSolvingScore {
  /** Overall problem-solving score (0-100) */
  score: number;

  /** Approach to problem analysis */
  approach: number;

  /** Logical reasoning */
  reasoning: number;

  /** Creativity in solutions */
  creativity: number;

  /** Efficiency of solution */
  efficiency: number;

  /** Edge case consideration */
  edgeCases: number;
}

/**
 * Behavioral/soft skills scoring breakdown
 */
export interface BehavioralScore {
  /** Overall behavioral score (0-100) */
  score: number;

  /** Leadership qualities */
  leadership: number;

  /** Teamwork collaboration */
  teamwork: number;

  /** Adaptability */
  adaptability: number;

  /** Conflict resolution */
  conflictResolution: number;

  /** Cultural fit indicators */
  culturalFit: number;
}

/**
 * Code quality scoring breakdown (for technical interviews)
 */
export interface CodeQualityScore {
  /** Overall code quality score (0-100) */
  score: number;

  /** Code readability */
  readability: number;

  /** Code organization/structure */
  organization: number;

  /** Efficiency/optimization */
  efficiency: number;

  /** Best practices adherence */
  bestPractices: number;

  /** Error handling */
  errorHandling: number;
}

/**
 * Confidence level assessment
 */
export interface ConfidenceScore {
  /** Overall confidence score (0-100) */
  score: number;

  /** Confidence level category */
  level: "low" | "medium" | "high";

  /** Indicators of confidence detected */
  indicators: string[];

  /** Areas where confidence seemed lower */
  lowConfidenceAreas: string[];
}

/**
 * Individual skill score
 */
export interface SkillScore {
  /** Skill name */
  name: string;

  /** Score for this skill (0-100) */
  score: number;

  /** Proficiency level */
  proficiency: "beginner" | "intermediate" | "advanced" | "expert";
}
