import React from "react"
import { Container, Row, Col } from 'react-bootstrap';
import MoodLine from "../components/MoodLine/MoodLine";
import MoodPie from "../components/MoodPie/MoodPie"
import MedIntake from "../components/MedIntake/MedIntake"
import ChartTitle from "../components/ChartTitle/ChartTitle"
import '../../node_modules/react-vis/dist/style.css';

function Home() {
  const data = [
    {x: 0, y: 8},
    {x: 1, y: 5},
    {x: 2, y: 4},
    {x: 3, y: 9},
    {x: 4, y: 1},
    {x: 5, y: 7},
    {x: 6, y: 6},
    {x: 7, y: 3},
    {x: 8, y: 2},
    {x: 9, y: 0}
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

export default Home