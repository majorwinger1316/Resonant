import { useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Sidebar from './components/Sidebar';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import User from './pages/User';
import Master from './pages/Master';
import AdminDashboard from './admin/AdminDashboard';
import EmployeeDashboard from '../employee/EmployeeDashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Check if the user is logged in by verifying the presence of the token
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);

    // Check if the user is an admin (you need to implement this logic based on your backend)
    const userRole = localStorage.getItem('role');
    setIsAdmin(userRole === 'admin');
  }, []);

  return (
    <div>
      {isLoggedIn && isAdmin && <Sidebar />} 
      <Routes>
        <Route path="/" element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user_settings" element={<User />} />
        <Route path="/master_settings" element={<Master />} />
        <Route path='/AdminDashboard' element={<AdminDashboard/>}/>
        <Route path='/EmployeeDashboard' element={<EmployeeDashboard/>}/>
      </Routes>
    </div>
  );
}

export default App;
