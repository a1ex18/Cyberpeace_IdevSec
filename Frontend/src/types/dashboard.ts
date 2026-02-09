export interface FraudDistributionItem {
  name: string;
  value: number;
}

export interface ComplaintsByStateItem {
  state: string;
  count: number;
}

export interface AlertItem {
  title: string;
  description: string;
}

export interface RecentComplaint {
  id: string;
  type: string;
  priority: string;
  state: string;
  unit: string;
}

export interface DashboardData {
  totalComplaints: number;
  highRiskCases: number;
  fraudDistribution: FraudDistributionItem[];
  complaintsByState: ComplaintsByStateItem[];
  alerts: AlertItem[];
  recentComplaints: RecentComplaint[];
}
