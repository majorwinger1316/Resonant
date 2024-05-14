import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EmployeeSidebar from '../src/components/EmployeeSidebar';
import "../src/styles/EmployeeDashboard.css";

function EmployeeDashboard() {
    const [machines, setMachines] = useState([]);

    useEffect(() => {
        // Fetch machines associated with the logged-in employee
        fetchMachines();
    }, []);

    const fetchMachines = async () => {
        try {
            // Extract employee name from the URL query parameters
            const searchParams = new URLSearchParams(window.location.search);
            const employeeName = searchParams.get('name');

            const url = `http://localhost:8080/api/employeedash?name=${employeeName}`;
            const response = await axios.get(url);
            setMachines(response.data);
        } catch (error) {
            console.error('Error fetching machines:', error);
        }
    };

    return (
        <div className='employee'>
            <EmployeeSidebar />
            <div>
                <h1>This is the Employee dashboard</h1>
                <div className="info">
                    {machines.map((machine, index) => (
                        <div className="box" key={index}>
                            <h2>Machine Number: {machine.Machinenumber}</h2>
                            <p>Place: {machine.Place}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default EmployeeDashboard;
