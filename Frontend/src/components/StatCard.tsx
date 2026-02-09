interface StatCardProps {
  title: string;
  value: string | number;
  description?: string;
}

const StatCard = ({ title, value, description }: StatCardProps) => {
  return (
    <div className="card p-5">
      <p className="text-xs font-semibold uppercase tracking-wide text-navy-700">{title}</p>
      <p className="mt-2 text-2xl font-semibold text-navy-900">{value}</p>
      {description && <p className="mt-1 text-xs text-navy-700">{description}</p>}
    </div>
  );
};

export default StatCard;
