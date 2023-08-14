const DashboardShell = ({ sidebar, main }) => {
  return (
    <div className="grid grid-cols-4 h-screen">
      <section className="col-span-1">{sidebar}</section>
      <section className="col-span-3 bg-gray-300">{main}</section>
    </div>
  );
};

export default DashboardShell;
