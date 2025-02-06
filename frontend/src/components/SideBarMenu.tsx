import { Link } from "react-router-dom";
import { FaCartShopping, FaSackDollar, FaMoneyBill1, FaBullseye, FaChartLine } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

interface SidebarMenuProps {
  currentPageName: string;
}

const SidebarMenu = (props: SidebarMenuProps) => {
  const { t } = useTranslation();
  const BASE_PATH = import.meta.env.VITE_BASE_PATH_FRONTEND || "/sales-manager/";

  return (
    <aside id="left-panel">
      <h1>{t(props.currentPageName)}</h1>
      <div id="menu">
        <Link to={BASE_PATH} className="unstyled-link">
          <div id="dashboard-button" className="menu-button">
            <FaChartLine />
            <h3>{t("menu.dashboard")}</h3>
          </div>
        </Link>
        <Link to={BASE_PATH + "sales"} className="unstyled-link">
          <div id="sales-button" className="menu-button">
            <FaCartShopping />
            <h3>{t("menu.sales")}</h3>
          </div>
        </Link>
        <Link to={BASE_PATH + "profit"} className="unstyled-link">
          <div id="profit-button" className="menu-button">
            <FaSackDollar />
            <h3>{t("menu.profit")}</h3>
          </div>
        </Link>
        <Link to={BASE_PATH + "expenses"} className="unstyled-link">
          <div id="expenses-button" className="menu-button">
            <FaMoneyBill1 />
            <h3>{t("menu.expenses")}</h3>
          </div>
        </Link>
        <Link to={BASE_PATH + "goals"} className="unstyled-link">
          <div id="goals-button" className="menu-button">
            <FaBullseye />
            <h3>{t("menu.goals")}</h3>
          </div>
        </Link>
      </div>
    </aside>
  );
};

export default SidebarMenu;
