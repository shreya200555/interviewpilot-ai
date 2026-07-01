/**
 * Resume interface representing a user's uploaded resume
 * Supports multiple file formats and parsing status tracking
 */
export interface Resume {
  /** Unique identifier for the resume */
  id: string;

  /** User ID who owns this resume */
  userId: string;

  /** Original filename of the uploaded file */
  filename: string;

  /** Storage URL for the resume file */
  fileUrl: string;

  /** File format/type */
  fileType: "pdf" | "docx" | "txt";

  /** File size in bytes */
  fileSize: number;

  /** Current processing status of the resume */
  status: ResumeStatus;

  /** Timestamp when resume was uploaded */
  uploadedAt: string;

  /** Timestamp when resume was last updated */
  updatedAt: string;

  /** Parsed resume data (populated after processing) */
  parsedData?: ParsedResumeData;

  /** Whether this is the user's primary/default resume */
  isPrimary: boolean;
}

/**
 * Status of resume processing pipeline
 */
export type ResumeStatus =
  | "pending" // Uploaded but not yet processed
  | "processing" // Currently being parsed/analyzed
  | "completed" // Successfully processed
  | "failed"; // Processing failed

/**
 * Structured data extracted from resume after parsing
 */
export interface ParsedResumeData {
  /** Extracted full name */
  fullName: string;

  /** Extracted email address */
  email: string;

  /** Extracted phone number */
  phone?: string;

  /** List of skills identified in resume */
  skills: string[];

  /** Work experience entries */
  experience: WorkExperience[];

  /** Education entries */
  education: Education[];

  /** Projects mentioned */
  projects?: Project[];

  /** Certifications */
  certifications?: Certification[];
}

export interface WorkExperience {
  /** Company name */
  company: string;

  /** Job title/role */
  title: string;

  /** Start date */
  startDate: string;

  /** End date (null if current) */
  endDate?: string;

  /** Description of responsibilities */
  description?: string;
}

export interface Education {
  /** Institution name */
  institution: string;

  /** Degree obtained */
  degree: string;

  /** Field of study */
  fieldOfStudy: string;

  /** Graduation year */
  graduationYear: number;

  /** GPA if available */
  gpa?: number;
}

export interface Project {
  /** Project name */
  name: string;

  /** Brief description */
  description: string;

  /** Technologies used */
  technologies: string[];

  /** Project URL if available */
  url?: string;
}

export interface Certification {
  /** Certification name */
  name: string;

  /** Issuing organization */
  issuer: string;

  /** Date obtained */
  date: string;

  /** Expiration date if applicable */
  expiresAt?: string;
}
