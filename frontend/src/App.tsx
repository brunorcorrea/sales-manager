import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import NotFoundPage from "./pages/NotFoundPage";
import Sales from "./pages/Sales";

function App() {
  const BASE_PATH = import.meta.env.VITE_BASE_PATH_FRONTEND || "/sales-manager/";

  return (
    <Router>
      <Routes>
        <Route path={BASE_PATH} element={<Dashboard />} />
        <Route path={BASE_PATH + "sales"} element={<Sales />} />
        <Route path={BASE_PATH + "profit"} element={<NotFoundPage />} />
        <Route path={BASE_PATH + "expenses"} element={<NotFoundPage />} />
        <Route path={BASE_PATH + "goals"} element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
