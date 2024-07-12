import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Register from './pages/Auth/Register';
import WeatherDashboard from './pages/Dashboard/WeatherDashboard';
import Login from './pages/Auth/Login';

function App() {
  return (
    <Router>
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/dashboard" element={<WeatherDashboard/>} />
          </Routes>
    </Router>
  );
}

export default App;
