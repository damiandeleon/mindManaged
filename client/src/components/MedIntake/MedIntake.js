import React from "react";
import { Row } from 'react-bootstrap';
import {XYPlot, LineSeries, VerticalGridLines, HorizontalGridLines, XAxis,  YAxis} from 'react-vis';


function MedIntake(props) {
    return (
      <Row className="d-flex justify-content-center">
      <XYPlot height={400} width={650}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <LineSeries data={props.data} />
      </XYPlot>
    </Row>
    )
}

export default MedIntake;