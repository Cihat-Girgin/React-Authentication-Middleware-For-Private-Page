import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../Login.css";

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div className="Login">
            <Form onSubmit={handleSubmit} className="text-center">
                <h4 className="text-primary">Login</h4>
                <Form.Group size="lg" controlId="email">
                    <Form.Label></Form.Label>
                    <Form.Control
                        autoFocus
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                    <Form.Label></Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                </Form.Group>
                
                <Button block size="lg" type="submit" disabled={!validateForm()} className="mt-3">
                    Login
                </Button>
            </Form>
        </div>
    );
}
export  default LoginPage;