import React from "react";
import { Form, Button, Col } from 'react-bootstrap';
import { GoogleLogin } from "react-google-login";
import { useDispatch } from 'react-redux'
import { AUTH } from "../../constants/actionTypes";
import { useHistory } from 'react-router-dom'
import "./Login.css"
require('dotenv').config()

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  
  const googleSuccess = async (res) => {       
    const result = res?.profileObj // '?.' throws "undefined" instead of an error
    const token = res?.tokenId;

    try {
      dispatch({ type: AUTH, data: { result, token } });

      history.push('/')
    }
    catch (err) {
      console.log(err)
    }
  };

  const googleFailure = () => {
    console.log("Google sign in was unsuccesful.")
  };

  return (
    <div className="margin-top">
      <Col fluid="true" align="center">
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

          <br></br>

          <GoogleLogin 
            clientId={process.env.GOOGLE_ID}
            render={(renderProps) => (
              <Button 
                variant="outline-info" 
                type="submit" 
                onClick={renderProps.onClick} 
                disabled={renderProps.disabled} 
              >
               Sign in with Google
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
          />

        </Form>
      </Col>
    </div>
  )
}

export default Login;