import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/sales" element={<NotFoundPage />} />
        <Route path="/profit" element={<NotFoundPage />} />
        <Route path="/expenses" element={<NotFoundPage />} />
        <Route path="/goals" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
