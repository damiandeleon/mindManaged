import React from 'react'
import { Jumbotron, Card, Row, Col, Container, CardDeck } from 'react-bootstrap';
import { GiBrain } from 'react-icons/gi';
import { BsBoxArrowInRight } from 'react-icons/bs';
import LoginBtn from '../components/LoginBtn/LoginBtn';
import './Home.css'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
const Home = () => {
  const {  isAuthenticated } = useAuth0();


  return (
    <Container>
      <Jumbotron id="jumbo-bg" className="text-center jumbotron" style={{borderRadius: '20px'}}>
        <div id="fade-in">
          <h1 id="jumbo-title" style={{textShadow: '4px 4px rgba(50,50,50, 0.8)'}}>Mind <GiBrain style={{ color: 'rgb(255, 160, 176)' }}/> Managed</h1>
          <h5 id="jumbo-desc">- A place to manage your mind -</h5>
          <br></br>
          <LoginBtn name="Get Started" variant="outline-light" size="lg" />
        </div>
      </Jumbotron>

      <Container>
        <Row className="d-flex justify-content-center">
          <CardDeck>
            <Col sm={12} md={6} lg={4} >
              <Card style={{ width: '350px', height: '720px', marginLeft: 'auto', marginRight: 'auto', marginTop: '15px', boxShadow: '0 0px 10px 2px darkgrey, 0 0px 20px 5px black', borderRadius: '10px' }} bg="light" id="fade-in">
                <Card.Img style={{height: '350px', borderRadius: '10px'}} variant="top" src="https://images.unsplash.com/photo-1555633514-abcee6ab92e1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"/>
                <Card.Body>
                  <Card.Title className="text-center" id="card-title">
                    Track Your Medication
                    <hr></hr>
                  </Card.Title>
                    <ul id="card-list">
                      <li>Keep track of all your current and future prescriptions</li>
                      <li>Get informed on different drug facts and interactions</li>
                    </ul>
                </Card.Body>
                  {isAuthenticated &&
                    <Link to="/medication" style={{color: 'forestgreen', fontSize: '16px', margin: '10px 15px', textAlign: 'right' }}>
                      Medication page <BsBoxArrowInRight style={{paddingBottom: '2px'}} />
                    </Link>
                  }
              </Card>
            </Col>

            <Col sm={12} md={6} lg={4}>
              <Card style={{ width: '350px', border: 'none', height: '720px', marginLeft: 'auto', marginRight: 'auto', marginTop: '15px', boxShadow: '0 0px 10px 2px darkgrey, 0 0px 20px 5px black', borderRadius: '10px' }} bg="light" id="fade-in2">
                <Card.Img style={{height: '350px', borderRadius: '10px'}} variant="top" src="https://st2.depositphotos.com/3114403/11583/v/600/depositphotos_115831468-stock-illustration-cartoon-brain-concept-doodle-style.jpg"/>
                <Card.Body>
                  <Card.Title className="text-center" id="card-title">
                    Mental State Updates
                    <hr></hr>
                  </Card.Title>
                    <ul id="card-list">
                      <li>Journal important details/events which affect your mood and life</li>
                      <li>Entries are saved for personal records or to show your mental healthcare professional</li>
                    </ul>     
                </Card.Body>
                  {isAuthenticated &&
                    <Link to="/journal" style={{color: 'forestgreen', fontSize: '16px', margin: '10px 15px', textAlign: 'right' }}>
                      Journal page <BsBoxArrowInRight style={{paddingBottom: '2px'}} />
                    </Link>
                  }
              </Card>
            </Col>

            <Col sm={12} md={6} lg={4}>
              <Card style={{ width: '350px', border: 'none', height: '720px', marginLeft: 'auto', marginRight: 'auto', marginTop: '15px', boxShadow: '0 0px 10px 2px darkgrey, 0 0px 20px 5px black', borderRadius: '10px' }} bg="light" id="fade-in3">
                <Card.Img style={{height: '350px', borderRadius: '10px'}} variant="top" src="https://cdn.pixabay.com/photo/2017/05/14/03/45/gui-2311261_960_720.png"/>
                <Card.Body>
                  <Card.Title className="text-center" id="card-title">
                    Personalized Graphs
                    <hr></hr>
                  </Card.Title>
                    <ul id="card-list">
                      <li>Mood charts to visualize your day-to-day feelings</li>
                      <li>Prescription intake chart to see when you've taken certain meds</li>
                    </ul>
                </Card.Body>
                  {isAuthenticated &&
                    <Link to="/charts" style={{color: 'forestgreen', fontSize: '16px', margin: '10px 15px', textAlign: 'right' }}>
                      Charts page <BsBoxArrowInRight style={{paddingBottom: '2px'}} />
                    </Link>
                  }
              </Card>
            </Col>
          </CardDeck>
        </Row>
      </Container>

    </Container>
  )
}

export default Home
