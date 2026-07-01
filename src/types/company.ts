/**
 * Company interface representing target companies for interview preparation
 * Supports company-specific interview patterns and question banks
 */
export interface Company {
  /** Unique identifier for the company */
  id: string;

  /** Company name */
  name: string;

  /** Company logo URL */
  logoUrl?: string;

  /** Company website URL */
  website?: string;

  /** Industry category */
  industry: string;

  /** Company size tier */
  size: "startup" | "small" | "medium" | "large" | "enterprise";

  /** Headquarters location */
  headquarters?: string;

  /** Primary brand color for UI theming */
  brandColor?: string;

  /** Whether company is featured/promoted */
  isFeatured: boolean;

  /** Number of interview templates available for this company */
  availableInterviewCount: number;

  /** Timestamp when company was added to system */
  createdAt: string;
}

/**
 * Company-specific interview patterns and metadata
 */
export interface CompanyInterviewPattern {
  /** Company ID */
  companyId: string;

  /** Common interview types used by this company */
  commonInterviewTypes: string[];

  /** Average difficulty level */
  averageDifficulty: "easy" | "medium" | "hard";

  /** Typical interview duration in minutes */
  typicalDuration: number;

  /** Key focus areas for this company's interviews */
  focusAreas: string[];

  /** Notable technical skills frequently tested */
  technicalSkills: string[];
}
