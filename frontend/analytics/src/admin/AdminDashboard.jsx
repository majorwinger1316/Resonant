import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';
import '../styles/AdminDashboard.css';

function AdminDashboard() {
    const [machines, setMachines] = useState([]);

    useEffect(() => {
        // Fetch data when the component mounts
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const url = 'http://localhost:8080/api/getinfo'; // Replace this URL with your actual API endpoint
            const response = await axios.get(url);
            setMachines(response.data); // Assuming the response data is an array of machines
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div className="admin">
            <Sidebar />
            <div className="content">
                <h1>This is the admin dashboard</h1>
                <div className="info">
                    {machines.map((machine, index) => (
                        <div className="box" key={index}>
                            <h2>Machine Number: {machine.Machinenumber}</h2>
                            <p>Employee: {machine.Employee}</p>
                            <p>Place: {machine.Place}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;
