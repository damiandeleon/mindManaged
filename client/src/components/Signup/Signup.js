import React from "react";
import { Form, Button, Col } from 'react-bootstrap';
import "./Signup.css"

function Signup() {
  return (
    <div className="margin-top">
      <Col fluid align="center">
        <Form className="fadesample">

          {/* First Name */}
          <Form.Group controlId="formBasicName">
            <Form.Label style={{fontSize: 24}}>First Name</Form.Label>
            <Form.Control type="first-name" placeholder="First name" />
          </Form.Group>
          <br></br>

          {/* Last Name */}
          <Form.Group controlId="formBasicName">
            <Form.Label style={{fontSize: 24}}>Last Name</Form.Label>
            <Form.Control type="last-name" placeholder="Last name" />
          </Form.Group>
          <br></br>

          {/* Email */}
          <Form.Group controlId="formBasicEmail">
            <Form.Label style={{fontSize: 24}}>Email address</Form.Label>
            <Form.Control type="email" placeholder="Email" />
            <Form.Text className="text-muted" style={{fontSize: 16}}>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <br></br>

          {/* Password */}
          <Form.Group controlId="formBasicPassword">
            <Form.Label style={{fontSize: 24}}>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <br></br>
          
          {/* Submit */}
          <Button variant="info" type="submit">
            Submit
          </Button>

        </Form>
      </Col>
    </div>
  )
}

export default Signup;