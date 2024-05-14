import React from 'react'
import "../styles/Dashboard.css"
import Sidebar from '../components/Sidebar';

function Dashboard() {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<div className="main_container">
			<Sidebar/>
			<nav className="navbar">
				<h2>Dashboard</h2>
				<button className="white_btn" onClick={handleLogout}>
					Logout
				</button>
			</nav>
		</div>
	);
}

export default Dashboard
