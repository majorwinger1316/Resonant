import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';
import '../styles/UserSettings.css';

function User() {
    const [data, setData] = useState({
        Machinenumber: '',
        Employee: '',
        Place: '',
    });
    const [employees, setEmployees] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        // Fetch employee names when the component mounts
        fetchEmployees();
    }, []);

    const fetchEmployees = async () => {
        try {
            const url = 'http://localhost:8080/api/getemployee'; // Replace this URL with your actual API endpoint
            const response = await axios.get(url);
            setEmployees(response.data); // Assuming the response data is an array of employee names
        } catch (error) {
            console.error('Error fetching employees:', error);
        }
    };

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = 'http://localhost:8080/api/info';
            const { data: res } = await axios.post(url, data);
            alert('Data Submitted');
            console.log(res.message);
        } catch (error) {
            console.error('Error submitting data:', error);
            alert('Machine already exists')
        }
    };

    return (
        <div className="user">
            <Sidebar />
            <div className="add">
                <h1>Add a machine to an Employee</h1>
                <form onSubmit={handleSubmit}>
                    <div className="addmac">
                        <label>Machine Number: </label>
                        <input
                            type="integer"
                            name="Machinenumber"
                            onChange={handleChange}
                            value={data.Machinenumber}
                            required
                        />
                    </div>
                    <div className="addemployee">
                        <label>Employee name: </label>
                        <select
                            name="Employee"
                            onChange={handleChange}
                            value={data.Employee}
                            size={1} // Display 5 items with scrollbar
                            required
                            className="scrollable-select" 
                        >
                            {employees.map((employee, index) => (
                                <option key={index} value={employee}>
                                    {employee}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="addplace">
                        <label>Place: </label>
                        <input
                            type="text"
                            name="Place"
                            onChange={handleChange}
                            value={data.Place}
                            required
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default User;
