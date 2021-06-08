import React from "react"
import { Container, Row, Col } from 'react-bootstrap';
import MoodLine from "../components/MoodLine/MoodLine";
import MoodPie from "../components/MoodPie/MoodPie"
import MedIntake from "../components/MedIntake/MedIntake"
import ChartTitle from "../components/ChartTitle/ChartTitle"
import '../../node_modules/react-vis/dist/style.css';
import { useAuth0 } from '@auth0/auth0-react';


function Charts() {
  const { isAuthenticated } = useAuth0();
  const data = [
    {x: "06/01/2021", y: 0},
    {x: "06/02/2021", y: 3},
    {x: "06/03/2021", y: 3},
    {x: "06/04/2021", y: 5},
    {x: "06/05/2021", y: 4},
    {x: "06/06/2021", y: 5},
    {x: "06/07/2021", y: 4},
    {x: "06/08/2021", y: 3},
    {x: "06/09/2021", y: 3},
    {x: "06/10/2021", y: 5}
  ];

  const data2 = [
    {x: 0, y: 0},
    {x: 1, y: 0},
    {x: 2, y: 0},
    {x: 3, y: -1},
    {x: 4, y: -1},
    {x: 5, y: 1},
    {x: 6, y: 0},
    {x: 7, y: 1},
    {x: 8, y: 1},
    {x: 9, y: 0}
  ];

  const myData = [{angle: 1}, {angle: 5}, {angle: 2}]

  return (
    isAuthenticated &&
    <div>
      <Container fluid>
        <Row>
          <Col className="mood-line-chart">
            <ChartTitle name='Mood Line Chart'/>
            <MoodLine data={data}/>
          </Col>
          <Col>
          <ChartTitle name='Mood Pie'/>
            <MoodPie data={myData}/>
            <br></br>
            <ChartTitle name='Medicine Intake'/>
            <MedIntake data={data2}/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Charts