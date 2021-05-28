import React from "react";
import { Row } from 'react-bootstrap';
import {XYPlot, LineSeries, VerticalGridLines, HorizontalGridLines, XAxis,  YAxis} from 'react-vis';


function MoodLine(props) {
    return (
      <Row className="d-flex justify-content-center">
        <XYPlot height={800} width={1000}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <LineSeries data={props.data} />
        </XYPlot>
      </Row>
    )
}

export default MoodLine;