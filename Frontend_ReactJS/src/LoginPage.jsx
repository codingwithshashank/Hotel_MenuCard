// LoginPage.jsx
import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from 'react-router-dom';

export default function LoginPage({ onLogin }) {
    const navigate = useNavigate();
    const [pwd, setPwd] = useState("");

    const handlePwd = (e) => {
        setPwd(e.target.value);

    };

    const login = () => {
        const correctPassword = "123";
        if (pwd === correctPassword) {
            alert("Login successful");
            onLogin(); // Call the onLogin function to update authentication state
            navigate('/MyAbout'); // Navigate to a protected page after login
        } else {
            alert("Login Fail");
        }
    };

    return (
        <>
            <h1>OWNER LOGIN</h1>
            <Form.Control type="password" onChange={handlePwd} placeholder="Enter Password" />
            <Button variant="outline-success" onClick={login}>Login</Button>
        </>
    );
}
