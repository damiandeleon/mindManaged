import React from "react";
import { Form, Button, Col } from 'react-bootstrap';
import "./Login.css"

function Login() {
  return (
    <div className="margin-top">
      <Col fluid align="center">
        <Form className="form-style fadesample">

          {/* Email */}
          <Form.Group controlId="formBasicEmail">
            <Form.Label style={{fontSize: 24}}>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted" style={{fontSize: 16}}>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          {/* Password */}
          <Form.Group controlId="formBasicPassword">
            <Form.Label style={{fontSize: 24}}>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          {/* Submit */}
          <Button variant="info" type="submit">
            Submit
          </Button>

        </Form>
      </Col>
    </div>
  )
}

export default Login;