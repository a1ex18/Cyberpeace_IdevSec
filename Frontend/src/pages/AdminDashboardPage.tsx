import { useEffect, useState } from "react";
import PageTransition from "../components/PageTransition";
import StatCard from "../components/StatCard";
import AlertCard from "../components/AlertCard";
import RecentComplaintsTable from "../components/RecentComplaintsTable";
import { fetchDashboardData } from "../services/api";
import { DashboardData } from "../types/dashboard";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid
} from "recharts";
import Spinner from "../components/Spinner";

const colors = ["#0B1F3B", "#18365E", "#37618C", "#5B82A9", "#8DB3D3", "#C6DCEB"];

const AdminDashboardPage = () => {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const result = await fetchDashboardData();
      setData(result);
      setLoading(false);
    };

    load();
  }, []);

  return (
    <PageTransition>
      <div className="space-y-8">
        <div>
          <h2 className="section-title">Admin Dashboard</h2>
          <p className="mt-1 text-xs text-navy-700">Real-time intelligence overview and operational priorities.</p>
        </div>

        {loading || !data ? (
          <div className="card flex items-center justify-center p-10">
            <Spinner />
          </div>
        ) : (
          <>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <StatCard title="Total Complaints" value={data.totalComplaints.toLocaleString()} />
              <StatCard title="High Risk Cases" value={data.highRiskCases.toLocaleString()} />
              <StatCard title="AI Resolution Rate" value="92%" description="Complaints auto-triaged" />
              <StatCard title="Average Response" value="28 mins" description="Critical incidents" />
            </div>

            <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
              <div className="card p-6">
                <p className="section-title">Fraud Type Distribution</p>
                <div className="mt-4 h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie data={data.fraudDistribution} dataKey="value" nameKey="name" outerRadius={90}>
                        {data.fraudDistribution.map((entry, index) => (
                          <Cell key={entry.name} fill={colors[index % colors.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div className="card p-6">
                <p className="section-title">Complaints by State</p>
                <div className="mt-4 h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data.complaintsByState}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="state" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="count" fill="#18365E" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="space-y-3">
                <p className="section-title">Live Risk Alerts</p>
                {data.alerts.map((alert) => (
                  <AlertCard key={alert.title} title={alert.title} description={alert.description} />
                ))}
              </div>
              <RecentComplaintsTable items={data.recentComplaints} />
            </div>
          </>
        )}
      </div>
    </PageTransition>
  );
};

export default AdminDashboardPage;
