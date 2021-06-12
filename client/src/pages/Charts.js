import { React, useEffect, useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';
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
    console.log(user.sub)
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
    <div>
      <Container fluid>
        <Row style={{ width: "100%", textAlign: 'center', background: 'lightgrey'}}>
          <Col className="mood-line-chart">
            
            { DataCoords.length ? (
              <div>
                <ChartTitle name='Mood Line Chart' />,
                <MoodLine info={DataCoords}/>
              </div>

              ): (<h3>No Results to Display.</h3>)
            }
          </Col>
        </Row>
        <Row style={{ width: "100%", textAlign: 'center', background: 'lightgrey'}}>
        <Col>
           
            { DataCoords.length ? (
              <div>
               <ChartTitle name='Mood Pie' />,
                <MoodPie data={DataCoords}/>
              </div>

              ): (<h3>Please begin by making a journal entry in the Journal tab</h3>)
            }
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Charts