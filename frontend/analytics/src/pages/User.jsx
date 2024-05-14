import React, { useState } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';
import '../styles/UserSettings.css';

function User() {
    const [data, setData] = useState({
        Machinenumber: '',
        Employee: '',
        Place: '',
    });
    const [error, setError] = useState('');

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
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(error.response.data.message);
            }
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
                            type="number"
                            name="Machinenumber"
                            onChange={handleChange}
                            value={data.Machinenumber}
                            required
                        />
                    </div>
                    <div className="addemployee">
                        <label>Employee name: </label>
                        <input
                            type="text"
                            name="Employee"
                            onChange={handleChange}
                            value={data.Employee}
                            required
                        />
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
