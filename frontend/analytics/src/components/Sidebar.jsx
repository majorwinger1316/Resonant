import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Sidebar.css"
import SpaceDashboardTwoToneIcon from '@mui/icons-material/SpaceDashboardTwoTone';
import PermIdentityTwoToneIcon from '@mui/icons-material/PermIdentityTwoTone';
import SettingsApplicationsTwoToneIcon from '@mui/icons-material/SettingsApplicationsTwoTone';
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';
import { Button } from 'react-bootstrap';

function Sidebar() {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location = "/login"
	};


  return (
    <div className='sidebar'>
      <div className='up_side'>
          <h2>Admin Access Bar</h2>
      </div>
      <div className='down_side'>
        <Link to="/AdminDashboard" className="sidebar-link">
          <SpaceDashboardTwoToneIcon className="sidebar-icon" />
          Dashboard
        </Link>
        <Link to="/user_settings" className="sidebar-link">
          <PermIdentityTwoToneIcon className="sidebar-icon" />
          User Settings
        </Link>
        <Link to="/master_settings" className="sidebar-link">
          <SettingsApplicationsTwoToneIcon className="sidebar-icon" />
          Master Settings
        </Link>
        <Button className="sidebar-link" onClick={handleLogout}>
          <LogoutTwoToneIcon className="sidebar-icon" />
          Logout
        </Button>
      </div>
    </div>
  )
}

export default Sidebar
