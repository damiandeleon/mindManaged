import { toString } from "lodash";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';



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
    { name: "Very Sad", value: one, fill: '#DF4740' },
    { name: "Somewhat Sad", value: two, fill: '#EE975A' },
    { name: "Neutral", value: three, fill: '#65CA68' },
    { name: "Somewhat Happy", value: four, fill: '#1489EA' },
    { name: "Very Happy", value: five, fill: '#A926BB' },
  ];
  // const myData = [{ angle: one, label: showLabel(one, "Very Sad")}, { angle: two, label: showLabel(two, "Somewhat Sad")}, { angle: three, label: showLabel(three, "Neutral")}, { angle: four, label: showLabel(four, "Somewhat Happy"), className: 'somewhatHappyWedge'}, { angle: five, label: showLabel(five, "Very Happy")}]
  // console.log(myData)
  const COLORS = ['#DF4740', '#EE975A', '#65CA68', '#1489EA', '#A926BB']; 

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    if(percent !== 0){
   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

  
      return (
        <text x={x} y={y} fill={"black"} textAnchor={x > cx ? 'middle' : 'middle'}  >
          {(percent * 100).toFixed(0)}%
        </text>
        
      );
    }
 
  };


  return (
    <ResponsiveContainer height={400}>
      <PieChart width={800} height={800}>
        <Pie
          data={myData}
          cx={"50%"}
          cy={"50%"}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={"90%"}
          dataKey={"value"}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
        <Legend align="center" layout="horizontal" iconSize="18px"/>
      </PieChart>
    </ResponsiveContainer>

  );
}

export default MoodPie;