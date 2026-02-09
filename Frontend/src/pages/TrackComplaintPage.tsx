import { useState } from "react";
import PageTransition from "../components/PageTransition";
import Spinner from "../components/Spinner";
import StatusCard from "../components/StatusCard";
import { fetchComplaintStatus } from "../services/api";
import { ComplaintStatus } from "../types/complaint";
import toast from "react-hot-toast";

const TrackComplaintPage = () => {
  const [complaintId, setComplaintId] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<ComplaintStatus | null>(null);

  const handleSearch = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!complaintId.trim()) {
      toast.error("Enter a valid complaint ID.");
      return;
    }

    try {
      setLoading(true);
      const data = await fetchComplaintStatus(complaintId.trim());
      setStatus(data);
      toast.success("Status updated.");
    } catch (error) {
      toast.error("Unable to fetch status.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageTransition>
      <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
        <form className="card p-6" onSubmit={handleSearch}>
          <h2 className="section-title">Track Complaint</h2>
          <p className="mt-1 text-xs text-navy-700">
            Enter your complaint ID to view the latest case status and assigned unit.
          </p>
          <div className="mt-6">
            <label className="label" htmlFor="complaintId">Complaint ID</label>
            <input
              id="complaintId"
              className="input"
              value={complaintId}
              onChange={(event) => setComplaintId(event.target.value)}
              placeholder="e.g., CS-10492"
            />
          </div>
          <button type="submit" className="btn-primary mt-6 w-full" disabled={loading}>
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <Spinner /> Fetching
              </span>
            ) : (
              "Fetch Status"
            )}
          </button>
        </form>

        <div className="card p-6">
          <h2 className="section-title">Case Status</h2>
          <p className="mt-1 text-xs text-navy-700">Latest status will be shown here.</p>

          <div className="mt-6">
            {status ? (
              <StatusCard status={status} />
            ) : (
              <div className="rounded-lg border border-dashed border-gray-200 bg-white p-6 text-sm text-navy-700">
                No status available yet.
              </div>
            )}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default TrackComplaintPage;
