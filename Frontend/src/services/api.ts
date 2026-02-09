import axios from "axios";
import { ComplaintClassification, ComplaintPayload, ComplaintStatus } from "../types/complaint";
import { DashboardData } from "../types/dashboard";

const api = axios.create({
  baseURL: "/api"
});

const useMock = true;

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const submitComplaint = async (payload: ComplaintPayload): Promise<ComplaintClassification> => {
  if (useMock) {
    await delay(900);
    return {
      fraudType: payload.fraudType,
      urgencyLevel: payload.amountLost && Number(payload.amountLost) > 50000 ? "Critical" : "High",
      riskScore: payload.amountLost ? Math.min(95, Math.round(Number(payload.amountLost) / 1000)) : 42,
      estimatedPriority: payload.amountLost && Number(payload.amountLost) > 50000 ? "P1" : "P2"
    };
  }

  const { data } = await api.post<ComplaintClassification>("/complaint", payload);
  return data;
};

export const fetchComplaintStatus = async (id: string): Promise<ComplaintStatus> => {
  if (useMock) {
    await delay(700);
    return {
      complaintId: id,
      currentStatus: "Under Review",
      priorityLevel: "P1",
      assignedUnit: "Cyber Intelligence Unit - NCR"
    };
  }

  const { data } = await api.get<ComplaintStatus>(`/status/${id}`);
  return data;
};

export const fetchDashboardData = async (): Promise<DashboardData> => {
  if (useMock) {
    await delay(600);
    return {
      totalComplaints: 12842,
      highRiskCases: 412,
      fraudDistribution: [
        { name: "UPI", value: 38 },
        { name: "Phishing", value: 22 },
        { name: "Job Scam", value: 14 },
        { name: "Investment Scam", value: 18 },
        { name: "Sextortion", value: 5 },
        { name: "Other", value: 3 }
      ],
      complaintsByState: [
        { state: "Maharashtra", count: 420 },
        { state: "Delhi", count: 360 },
        { state: "Karnataka", count: 280 },
        { state: "Uttar Pradesh", count: 310 },
        { state: "Tamil Nadu", count: 240 }
      ],
      alerts: [
        {
          title: "Ransomware surge detected",
          description: "Clustered attacks reported across Tier-1 cities in the last 24 hours."
        },
        {
          title: "Phishing campaign spike",
          description: "Bank impersonation emails up 35% this week."
        }
      ],
      recentComplaints: [
        { id: "CS-10492", type: "UPI", priority: "P1", state: "Delhi", unit: "NCR Response" },
        { id: "CS-10489", type: "Investment Scam", priority: "P1", state: "Maharashtra", unit: "Financial Crimes" },
        { id: "CS-10472", type: "Phishing", priority: "P2", state: "Karnataka", unit: "Cyber Intelligence" }
      ]
    };
  }

  const { data } = await api.get<DashboardData>("/dashboard");
  return data;
};
