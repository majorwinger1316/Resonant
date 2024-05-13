import { useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function Register() {

    const [data, setData] = useState({
		name: "",
		role: "",
		email: "",
		password: "",
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/users";
			const { data: res } = await axios.post(url, data);
			navigate("/login");
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
        <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '87vh', 
            width: '100%', 
            backgroundSize: 'cover',
            marginLeft:'130%' 
        }}>
            <Container style={{ 
                display: 'flex', 
                justifyContent: 'center',
                alignItems: 'center' ,
                backgroundColor: 'transparent', 
                padding: '20px', 
                borderRadius: '10px',
                height: "60vh",
                width: '50vh', 
                backdropFilter: 'blur(15px)',
                border: '2px solid black',

            }}>
                <Row className="justify-content-md-center">
                    <Col md={0}>
                    <Form action='' onSubmit={handleSubmit}>
                            <div style={{ padding: '10px', width: '35vh' }}>
                                <Form.Group controlId="formName">
                                    <div style={{fontFamily: "'Courier New', Courier, monospace", fontSize: "15px"}}>
                                    <span>Name</span>
                                    </div>
                                    <Form.Control
                                        type="text"
                                        name='name'
                                        placeholder="Your Name"
                                        onChange={handleChange}
                                        value={data.name}
                                        required
                                    />
                                </Form.Group>
                            </div>
                            <div style={{ padding: '10px', width: '35vh' }}>
                                    <div style={{fontFamily: "'Courier New', Courier, monospace", fontSize: "15px"}}>
                                    <span>Role</span>
                                    </div>
                                    <Form.Group controlId="formUserID">
                                    <Form.Control
                                        type="text"
                                        name='role'
                                        placeholder="ex: admin"
                                        onChange={handleChange}
                                        value={data.role}
                                        required
                                    />
                                </Form.Group>
                            </div>
                            <div style={{ padding: '10px', width: '35vh' }}>
                                    <div style={{fontFamily: "'Courier New', Courier, monospace", fontSize: "15px"}}>
                                    <span>Email</span>
                                    </div>
                                    <Form.Group controlId="formEmail">
                                    <Form.Control
                                        type="email"
                                        name='email'
                                        placeholder="example@example.com"
                                        onChange={handleChange}
                                        value={data.email}
                                        required
                                    />
                                </Form.Group>
                            </div>
                            <div style={{ padding: '10px', width: '35vh' }}>
                            <div style={{fontFamily: "'Courier New', Courier, monospace", fontSize: "15px"}}>
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
                                <Button type='submit' variant="primary" style={{ width: '100%', maxWidth: '200px', fontFamily:"'Courier New', Courier, monospace" }}>Register</Button>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'center', width:'35vh', fontSize: '13px', color: 'grey'}}>
                                <Link to="/login" style={{ color: 'grey', fontFamily:"'Courier New', Courier, monospace" }}>Already a User?</Link>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Register
