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
    <div>
      <div>good {props.good}</div>
      <div>neutral {props.neutral}</div>
      <div>bad {props.bad}</div>
      <div>all {total}</div>
      <div>average {average}</div>
      <div>positive {positive} %</div>
    </div>
  )
};

const App = () =>{
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0)


  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <h1>statistics</h1>
      <Statistics neutral={neutral} good={good} bad={bad} />
    </div>
 );
}

export default App;
