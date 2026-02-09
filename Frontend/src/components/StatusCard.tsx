import { ComplaintStatus } from "../types/complaint";

interface StatusCardProps {
  status: ComplaintStatus;
}

const StatusCard = ({ status }: StatusCardProps) => {
  return (
    <div className="card p-6">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between text-sm">
          <span className="text-navy-700">Complaint ID</span>
          <span className="font-semibold text-navy-900">{status.complaintId}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-navy-700">Current Status</span>
          <span className="font-semibold text-navy-900">{status.currentStatus}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-navy-700">Priority Level</span>
          <span className="font-semibold text-navy-900">{status.priorityLevel}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-navy-700">Assigned Unit</span>
          <span className="font-semibold text-navy-900">{status.assignedUnit}</span>
        </div>
      </div>
    </div>
  );
};

export default StatusCard;
