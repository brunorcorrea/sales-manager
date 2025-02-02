import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/sales-manager/" element={<Dashboard />} />
        <Route path="/sales-manager/sales" element={<NotFoundPage />} />
        <Route path="/sales-manager/profit" element={<NotFoundPage />} />
        <Route path="/sales-manager/expenses" element={<NotFoundPage />} />
        <Route path="/sales-manager/goals" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
