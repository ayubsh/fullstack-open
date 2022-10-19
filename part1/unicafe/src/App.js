import { useState } from "react";

const Statistics = (props) => {
  if (props.bad == 0 && props.good == 0 && props.neutral == 0){
    return(
      <div>No feedback given</div>
    );
  }
  const total = (props.bad + props.good + props.neutral)
  const average = ((props.good - props.bad)/total)
  const positive = (props.good/(total))*100

  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={props.good} />
        <StatisticLine text="neutral" value={props.neutral} />
        <StatisticLine text="bad" value={props.bad} />
        <StatisticLine text="all" value={total} />
        <StatisticLine text="average" value={average} />
        <StatisticLine text="positive" value={positive} />
      </tbody>
    </table>
  )
};

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text} {props.value}</td>
    </tr>
  )
};

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
};
const App = () =>{
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1);
  }

  const handleBadClick = () => {
    setBad(bad + 1);
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button text={"good"} handleClick={handleGoodClick} />
      <Button text={"neutral"} handleClick={handleNeutralClick} />
      <Button text={"bad"} handleClick={handleBadClick} />
      <h1>statistics</h1>
      <Statistics neutral={neutral} good={good} bad={bad} />
    </div>
 );
}

export default App;
