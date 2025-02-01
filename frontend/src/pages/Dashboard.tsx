import RevenueChart from "../components/Charts/RevenueChart";
import GoalsChart from "../components/Charts/GoalsChart";
import SidebarMenu from "../components/SideBarMenu";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Dashboard = () => {
  return (
    <>
      <Header />
      <div id="main-container">
        <SidebarMenu />
        <main id="main-content">
          <RevenueChart />
          <GoalsChart />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
