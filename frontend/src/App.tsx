import { FaCircleUser, FaCartShopping, FaSackDollar, FaMoneyBill1, FaBullseye, FaChartLine } from "react-icons/fa6";
import RevenueChart from "./components/Charts/RevenueChart";
import GoalsChart from "./components/Charts/GoalsChart";
import "./App.css";

function App() {
  return (
    <>
      <header id="profile-info">
        <FaCircleUser />
        <h3>Username</h3>
      </header>
      <div id="main-container">
        <aside id="left-panel">
          <h1>Dashboard</h1>
          <div id="menu">
            <div id="dashboard-button" className="menu-button">
              <FaChartLine />
              <h3>Dashboard</h3>
            </div>
            <div id="sales-button" className="menu-button">
              <FaCartShopping />
              <h3>Sales</h3>
            </div>
            <div id="profit-button" className="menu-button">
              <FaSackDollar />
              <h3>Profit</h3>
            </div>
            <div id="expenses-button" className="menu-button">
              <FaMoneyBill1 />
              <h3>Expenses</h3>
            </div>
            <div id="goals-button" className="menu-button">
              <FaBullseye />
              <h3>Goals</h3>
            </div>
          </div>
        </aside>
        <main id="main-content">
          <RevenueChart />
          <GoalsChart />
        </main>
      </div>
      <footer>
        <h3>Made by Bruno Ricardo Corrêa</h3>
      </footer>
    </>
  );
}

export default App;
