import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';

function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/auth";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      const employeeName = res.name; // Extract name from response data
      alert("Logged in successfully");
      if (res.role === "admin") {
        window.location = "/AdminDashboard";
      } else if (res.role === "employee") {
        // Redirect to EmployeeDashboard with name in URL query parameters
        window.location = `/EmployeeDashboard?name=${employeeName}`;
      } else {
        window.location = "/";
      }
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
        alert("Wrong username or password");
      }
    }
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      marginLeft: '130%',
      alignItems: 'center',
      height: '87vh',
      width: '100%',
      backgroundSize: 'cover'
    }}>
      <Container style={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'transparent',
        padding: '20px',
        borderRadius: '10px',
        height: "40vh",
        width: '50vh',
        backdropFilter: 'blur(15px)',
        border: '2px solid black'
      }}>
        <Row className="justify-content-md-center">
          <Col md={8}>
            <Form action='' onSubmit={handleSubmit}>
              <div style={{ padding: '10px', width: '35vh' }}>
                <Form.Group controlId="formEmail">
                  <div style={{ fontFamily: "'Courier New', Courier, monospace", fontSize: "15px" }}>
                    <span>User ID</span>
                  </div>
                  <Form.Control
                    type="email"
                    name='email'
                    placeholder="Email"
                    onChange={handleChange}
                    value={data.email}
                    autoComplete="off"
                    required
                  />
                </Form.Group>
              </div>
              <div style={{ padding: '10px', width: '35vh' }}>
                <div style={{ fontFamily: "'Courier New', Courier, monospace", fontSize: "15px" }}>
                  <span>Password</span>
                </div>
                <Form.Group controlId="formPassword">
                  <Form.Control
                    type="password"
                    name='password'
                    placeholder="Password"
                    onChange={handleChange}
                    value={data.password}
                    required
                  />
                </Form.Group>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', width: '35vh', border: "100%", padding: "10px" }}>
                <Button type='submit' variant="primary" style={{ width: '100%', maxWidth: '200px' }}>Login</Button>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', width: '35vh', fontSize: '13px', color: 'grey' }}>
                <Link to="/register" style={{ color: 'grey', fontFamily: "'Courier New', Courier, monospace" }}>Click here to register(employee)</Link>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
