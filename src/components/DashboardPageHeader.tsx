type DashboardPageHeaderProps = {
  title: string;
  description?: string;
};

const DashboardPageHeader = ({
  title,
  description,
}: DashboardPageHeaderProps) => {
  return (
    <div className="mb-6">
      <h1 className="text-2xl font-bold text-zinc-900">{title}</h1>
      {description && (
        <p className="text-sm text-zinc-500 mt-1 max-w-2xl">{description}</p>
      )}
    </div>
  );
};

export default DashboardPageHeader;
