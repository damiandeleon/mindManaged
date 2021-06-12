import { toString } from "lodash";
// import React from "react";
// import { Row } from 'react-bootstrap';
// import { RadialChart } from 'react-vis';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';



function MoodPie(props) {
  let data = props.data;
  let array = [];

  data.map(moodLevel => {
    array.push(parseInt(moodLevel.moodLevel))
    return moodLevel;
  })

  function getOccurrence(array, string) {
    let name = ""
    let count = 0;
    array.forEach((v) =>
    (v === string && count++,
      name = string)
    );

    return count;
  };
  let one = getOccurrence(array, 1);
  let two = getOccurrence(array, 2);
  let three = getOccurrence(array, 3);
  let four = getOccurrence(array, 4);
  let five = getOccurrence(array, 5);
  function showLabel(num, string) {
    if (num === 0) {
      return " ";
    } else return toString(string)
  };


  const myData = [
    { name: "Very Sad", value: one, position: "outsdie"},
    { name: "Somewhat Sad", value: two },
    { name: "Neutral", value: three },
    { name: "Somewhat Happy", value: four },
    { name: "Very Happy", value: five },
  ];
  // const myData = [{ angle: one, label: showLabel(one, "Very Sad")}, { angle: two, label: showLabel(two, "Somewhat Sad")}, { angle: three, label: showLabel(three, "Neutral")}, { angle: four, label: showLabel(four, "Somewhat Happy"), className: 'somewhatHappyWedge'}, { angle: five, label: showLabel(five, "Very Happy")}]
  // console.log(myData)
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#cfb4ed', '#FFDAB9',]; 

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    if(percent !== 0){
   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

  
      return (
        <text x={x} y={y} fill={"black"} fontSize={9} textAnchor={x > cx ? 'middle' : 'middle'}  >
          {myData[index].name}  {(percent * 100).toFixed(0)}%
        </text>
        
      );
    }
 
  };


  return (
    // <Row className="d-flex justify-content-center">
    //   {/* Mood Pie Chart */}
    //   <RadialChart
    //     id="chart"
    //     data={myData}
    //     width={300}
    //     height={300}
    //     showLabels={true}
    //   />
    // </Row>
    <ResponsiveContainer height={300}>
      <PieChart width={800} height={800}>
        <Pie
          data={myData}
          cx={"50%"}
          cy={"50%"}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={"100%"}
          dataKey={"value"}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>

  );
}

export default MoodPie;