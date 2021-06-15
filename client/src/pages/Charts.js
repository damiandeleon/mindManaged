import { React, useEffect, useState } from "react";
import { Container, Row, Col, Card, Jumbotron } from 'react-bootstrap';
import MoodLine from "../components/MoodLine/MoodLine";
import MoodPie from "../components/MoodPie/MoodPie"
import MedIntake from "../components/MedIntake/MedIntake"
import ChartTitle from "../components/ChartTitle/ChartTitle"
import '../../node_modules/react-vis/dist/style.css';
import { useAuth0 } from '@auth0/auth0-react';
import API from '../utils/API'


function Charts() {
  const {user} = useAuth0()

  const [Data, setData1] = useState({
    date: "",
    moodLevel: "",
  })

  const [DataCoords, setDataCoords] = useState([]);

  useEffect(() => {
    API.getEntries(user.sub)
      .then(res =>
        setDataCoords(res.data)
      )

  }, [])

  const data2 = [
    { x: 0, y: 0 },
    { x: 1, y: 0 },
    { x: 2, y: 0 },
    { x: 3, y: -1 },
    { x: 4, y: -1 },
    { x: 5, y: 1 },
    { x: 6, y: 0 },
    { x: 7, y: 1 },
    { x: 8, y: 1 },
    { x: 9, y: 0 }
  ];


  const myData = DataCoords.map(angles => {
    let angle = { angle: parseInt(angles.moodLevel) }
    return angle
  })
  // const myData = [{ angle: 1 }, { angle: 5 }, { angle: 2 }]

  return (
    <Container>

      <Jumbotron id="jumbo-bg2" style={{ borderRadius: '20px' }}>
        <div className="text-center" id="fade-in">
            <h1 id="jumbo-title" style={{ textShadow: '4px 4px rgba(50,50,50, 0.8)'  }}>Charts</h1>
            <h5>- Visuals for your mental health -</h5>
        </div>
      </Jumbotron>

      { DataCoords.length ? (
        <Container style={{ textAlign: 'center', background: 'rgba(255,255,255,0.95)', borderRadius: '10px', boxShadow: '0 0px 10px 2px darkgrey, 0 0px 20px 5px black'}}>

          <Row>
            <Col style={{margin: '10px auto'}}>
                <div>
                  <ChartTitle name='Mood Line Chart' />
                  <h6>Track mood patterns by day</h6>  
                  <MoodLine info={DataCoords}/>
                </div>
            </Col>
          </Row>
          <hr></hr>
          <Row>
            <Col style={{margin: '10px auto'}}>
              <div>
                <ChartTitle name='Mood Pie' />
                <h6>Track mood patterns by frequency</h6>
                <MoodPie data={DataCoords}/>
              </div>
            </Col>
          </Row>

        </Container>
      ) : (
        <div className='text-center' id="fade-in" style={{'marginTop': '10%', color: 'white', width: 'auto', borderRadius: '20px' }}>
          <Container>
            <Card.Body style={{ textShadow: '4px 4px rgba(50,50,50, 0.8)', backgroundColor: 'rgba(0,0,0,0.9)', borderRadius: '15px', boxShadow: '0 0px 8px 0 rgb(56, 78, 56), 0 0px 20px 0 black' }}>
              <h1 style={{fontSize: '50px'}}>No Results to Display</h1>
              <hr></hr>
              <h4 style={{fontSize: '25px'}}>Please begin by making a journal entry in the Journal tab</h4>
            </Card.Body>
          </Container>
      </div>
      )}
    </Container>
  )
}

export default Charts