import DashboardShell from "../components/dashboard/DashboardShell";
import DashboardActiveMessages from "../components/dashboard/DashboardActiveMessages";
import DashboardSidebar from "../components/dashboard/DashboardSidebar";

const Dashboard = () => {
  return (
    <DashboardShell
      sidebar={<DashboardSidebar />}
      main={<DashboardActiveMessages />}
    />
  );
};

export default Dashboard;
