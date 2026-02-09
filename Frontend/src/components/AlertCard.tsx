interface AlertCardProps {
  title: string;
  description: string;
}

const AlertCard = ({ title, description }: AlertCardProps) => {
  return (
    <div className="rounded-lg border border-alert/30 bg-alert/10 p-4">
      <p className="text-sm font-semibold text-alert">{title}</p>
      <p className="mt-1 text-xs text-navy-900">{description}</p>
    </div>
  );
};

export default AlertCard;
