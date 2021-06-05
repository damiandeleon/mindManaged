import React from "react";
import { Row } from 'react-bootstrap';
import { RadialChart } from 'react-vis';


function MoodPie(props) {
    return (
      <Row className="d-flex justify-content-center">
      {/* Mood Pie Chart */}
      <RadialChart
        data={props.data}
        width={350}
        height={350} 
      />
    </Row>
    )
}

export default MoodPie;