import { useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Sidebar from './components/Sidebar';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import User from './pages/User';
import Master from './pages/Master';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is logged in by verifying the presence of the token
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  return (
    <div>
      {isLoggedIn && <Sidebar />} {/* Render the sidebar if the user is logged in */}
      <Routes>
        <Route path="/" element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user_settings" element={<User />} />
        <Route path="/master_settings" element={<Master />} />
      </Routes>
    </div>
  );
}

export default App;
