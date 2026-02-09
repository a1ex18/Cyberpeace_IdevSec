import { RecentComplaint } from "../types/dashboard";

interface RecentComplaintsTableProps {
  items: RecentComplaint[];
}

const RecentComplaintsTable = ({ items }: RecentComplaintsTableProps) => {
  return (
    <div className="card overflow-hidden">
      <div className="border-b border-gray-100 px-5 py-4">
        <p className="section-title">Recent High Priority Complaints</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-lightgray text-xs uppercase text-navy-700">
            <tr>
              <th className="px-5 py-3">ID</th>
              <th className="px-5 py-3">Type</th>
              <th className="px-5 py-3">Priority</th>
              <th className="px-5 py-3">State</th>
              <th className="px-5 py-3">Assigned Unit</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="border-b border-gray-100">
                <td className="px-5 py-3 font-semibold text-navy-900">{item.id}</td>
                <td className="px-5 py-3 text-navy-700">{item.type}</td>
                <td className="px-5 py-3 text-navy-700">{item.priority}</td>
                <td className="px-5 py-3 text-navy-700">{item.state}</td>
                <td className="px-5 py-3 text-navy-700">{item.unit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentComplaintsTable;
