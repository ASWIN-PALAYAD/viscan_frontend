import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Register from './components/Auth/Register';
import WeatherDashboard from './components/Dashboard/WeatherDashboard';
import Login from './components/Auth/Login';

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
