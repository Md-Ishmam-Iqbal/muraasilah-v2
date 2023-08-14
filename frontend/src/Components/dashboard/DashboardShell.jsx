const DashboardShell = ({ sidebar, main }) => {
  return (
    <div className="grid grid-cols-4">
      <section className="col-span-1 border-x-2 border-slate-300">
        {sidebar}
      </section>
      <section className="col-span-3">{main}</section>
    </div>
  );
};

export default DashboardShell;
