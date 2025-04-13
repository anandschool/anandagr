import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import HolidayList from './pages/HolidayList';
import DailyMessage from './pages/DailyMessage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/holidays" element={<HolidayList />} />
        <Route path="/message" element={<DailyMessage />} />
      </Routes>
    </Router>
  );
}

export default App;