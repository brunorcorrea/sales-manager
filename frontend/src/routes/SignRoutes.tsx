import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../pages/login";

const SignRoutes = () => {
  const BASE_PATH = import.meta.env.VITE_BASE_PATH_FRONTEND || "/sales-manager/";
  return (
    <Router>
      <Routes>
        <Route path={BASE_PATH} element={<Login />} />
      </Routes>
    </Router>
  );
};

export default SignRoutes;
