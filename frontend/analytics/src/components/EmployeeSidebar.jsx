import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Sidebar.css"
import SpaceDashboardTwoToneIcon from '@mui/icons-material/SpaceDashboardTwoTone';
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';
import { Button } from 'react-bootstrap';

function EmployeeSidebar() {
	
    const handleLogout = () => {
		console.log(localStorage.removeItem("token"));
		window.location = "/login"
	};


  return (
    <div className='sidebar'>
      <div className='up_side'>
          <h2>Employee Access Bar</h2>
      </div>
      <div className='down_side'>
        <Link to="/EmployeeDashboard" className="sidebar-link">
          <SpaceDashboardTwoToneIcon className="sidebar-icon" />
          Dashboard
        </Link>
        <Button className="sidebar-link" onClick={handleLogout}>
          <LogoutTwoToneIcon className="sidebar-icon" />
          Logout
        </Button>
      </div>
    </div>
  )
}

export default EmployeeSidebar
