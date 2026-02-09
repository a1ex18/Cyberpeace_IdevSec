export type FraudType =
  | "UPI"
  | "Phishing"
  | "Job Scam"
  | "Investment Scam"
  | "Sextortion"
  | "Other";

export interface ComplaintPayload {
  fullName: string;
  phoneNumber: string;
  email: string;
  fraudType: FraudType;
  amountLost: number | "";
  description: string;
  evidenceFile?: File | null;
}

export interface ComplaintClassification {
  fraudType: FraudType;
  urgencyLevel: "Low" | "Medium" | "High" | "Critical";
  riskScore: number;
  estimatedPriority: "P1" | "P2" | "P3" | "P4";
}

export interface ComplaintStatus {
  complaintId: string;
  currentStatus: string;
  priorityLevel: string;
  assignedUnit: string;
}
