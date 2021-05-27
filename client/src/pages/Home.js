import React from "react"
import {XYPlot, LineSeries, VerticalGridLines, HorizontalGridLines, XAxis,  YAxis, RadialChart} from 'react-vis';
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
      
      {/* Mood Line Chart */}
      <h1 className="text-center">Mood Line Chart</h1>
      <XYPlot height={500} width={500} className="container-fluid">
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <LineSeries data={data} />
      </XYPlot>

      {/* Mood Pie Chart */}
      <h1>Mood Pie Chart</h1>
      <RadialChart
        data={myData}
        width={500}
        height={500} 
      />
      {/* Medicine Intake */}
      <h1>Medicine Intake</h1>
      <XYPlot height={500} width={500} className="">
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <LineSeries data={data2} />
      </XYPlot>

    </div>
  )
}

export default Home