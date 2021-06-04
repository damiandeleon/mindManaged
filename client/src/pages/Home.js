import React from 'react'
import { Jumbotron, Card, Row, Col, Container, ListGroup, CardDeck } from 'react-bootstrap';
import LoginBtn from '../components/LoginBtn/LoginBtn';
import './Home.css'

const Home = () => {


  return (
    <div>
      <Jumbotron id="jumbo-bg">
        <div className="text-center">
          <h1 style={{fontSize: '75px'}} variant="info" id="jumbo-title">Mind Managed</h1>
          <h4>A place to manage your mind</h4>
          <br></br>
          <LoginBtn name="Get Started!" variant="info" style={{height: '50px'}}/>
        </div>
      </Jumbotron>

      <Container>
        <Row>
          <CardDeck>
            <Col sm={12} md={2} lg={4} >
              <Card style={{ width: '350px', border: 'none', height: '720px'}} bg="info" id="fade-in">
                <Card.Img style={{height: '350px'}} variant="top" src="https://images.unsplash.com/photo-1555633514-abcee6ab92e1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"/>
                <Card.Body>
                  <Card.Title className="text-center" id="card-title">
                    Track Your Medication
                    <hr></hr>
                  </Card.Title>
                  <Card.Text>
                    <ul id="card-list">
                      <li>Keep track of all your current and future prescriptions</li>
                      <li>Get informed on different drug facts and interactions</li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col sm={12} md={2} lg={4}>
              <Card style={{ width: '350px', border: 'none', height: '720px' }} bg="info" id="fade-in2">
                <Card.Img style={{height: '348px'}} variant="top" src="https://st2.depositphotos.com/3114403/11583/v/600/depositphotos_115831468-stock-illustration-cartoon-brain-concept-doodle-style.jpg"/>
                <Card.Body>
                  <Card.Title className="text-center" id="card-title">
                    Mental State Updates
                    <hr></hr>
                  </Card.Title>
                  <Card.Text>
                    <ul id="card-list">
                      <li>Journal important details/events which affect your mood and life</li>
                      <li>Journal entries are saved for personal records or to show your mental healthcare professional</li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col sm={12} md={2} lg={4}>
              <Card style={{ width: '350px', border: 'none', height: '720px' }} bg="info" id="fade-in3">
                <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/simple-bar-chart-graph-diagram-icon-cartoon-vector-flat-design-green-background-long-shadow-207449005.jpg"/>
                <Card.Body>
                  <Card.Title className="text-center" id="card-title">
                    Personalized Graphs
                    <hr></hr>
                  </Card.Title>
                  <Card.Text>
                    <ul id="card-list">
                      <li>Mood charts to visualize your day-to-day feelings</li>
                      <li>Prescription intake chart to see when you've taken certain meds</li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </CardDeck>
        </Row>
      </Container>

    </div>
  )
}

export default Home
