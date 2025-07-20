import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "../pages/login";

const SignRoutes = () => {
  const BASE_PATH = import.meta.env.VITE_BASE_PATH_FRONTEND || "/sales-manager/";
  return (
    <Router>
      <Route path={BASE_PATH} element={<Login />} />
    </Router>
  );
};

export default SignRoutes;
