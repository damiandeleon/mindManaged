import { React } from "react";
import { Row } from 'react-bootstrap';
// import {XYPlot, LineSeries, VerticalGridLines, HorizontalGridLines, XAxis,  YAxis} from 'react-vis';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


function MoodLine(props) {
  const { info } = props; 
    const data1 = info.map(stuff => {
      let cleanedInfo = 
      {
        name: stuff.date,
        MoodLevel: stuff.moodLevel 
      }
      return cleanedInfo
    })

  return (
    <ResponsiveContainer width={"100%"} height={500}>
      <LineChart
        width={500}
        height={300}
        data={data1}
        margin={{
          top: 5,
          right: 50,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        {/* <Line type="monotone" dataKey="" stroke="#8884d8" activeDot={{ r: 8 }} /> */}
        <Line type="monotone" dataKey="MoodLevel" stroke="#82ca9d" activeDot={{ r: 8 }}/>
      </LineChart>
    </ResponsiveContainer>
  );

}

export default MoodLine;