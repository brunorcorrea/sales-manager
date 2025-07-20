import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import NotFoundPage from "../pages/NotFoundPage";
import Sales from "../pages/sales";

const OtherRoutes = () => {
  const BASE_PATH = import.meta.env.VITE_BASE_PATH_FRONTEND || "/sales-manager/";

  return (
    <Router>
      {/* <Routes> */}
      <Route path={BASE_PATH} element={<Dashboard />} />
      <Route path={BASE_PATH + "sales"} element={<Sales />} />
      <Route path={BASE_PATH + "profit"} element={<NotFoundPage />} />
      <Route path={BASE_PATH + "expenses"} element={<NotFoundPage />} />
      <Route path={BASE_PATH + "goals"} element={<NotFoundPage />} />
      {/* </Routes> */}
    </Router>
  );
};

export default OtherRoutes;
