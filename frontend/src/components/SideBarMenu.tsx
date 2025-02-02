import { Link } from "react-router-dom";
import { FaCartShopping, FaSackDollar, FaMoneyBill1, FaBullseye, FaChartLine } from "react-icons/fa6";

const SidebarMenu = () => {
  const BASE_PATH = import.meta.env.VITE_BASE_PATH_FRONTEND || "/sales-manager/";

  return (
    <aside id="left-panel">
      <h1>Dashboard</h1>
      <div id="menu">
        <Link to={BASE_PATH} className="unstyled-link">
          <div id="dashboard-button" className="menu-button">
            <FaChartLine />
            <h3>Dashboard</h3>
          </div>
        </Link>
        <Link to={BASE_PATH + "sales"} className="unstyled-link">
          <div id="sales-button" className="menu-button">
            <FaCartShopping />
            <h3>Sales</h3>
          </div>
        </Link>
        <Link to={BASE_PATH + "profit"} className="unstyled-link">
          <div id="profit-button" className="menu-button">
            <FaSackDollar />
            <h3>Profit</h3>
          </div>
        </Link>
        <Link to={BASE_PATH + "expenses"} className="unstyled-link">
          <div id="expenses-button" className="menu-button">
            <FaMoneyBill1 />
            <h3>Expenses</h3>
          </div>
        </Link>
        <Link to={BASE_PATH + "goals"} className="unstyled-link">
          <div id="goals-button" className="menu-button">
            <FaBullseye />
            <h3>Goals</h3>
          </div>
        </Link>
      </div>
    </aside>
  );
};

export default SidebarMenu;
