import { useState } from "react";

const MaxAnecdote = (props) =>{
  const maxis = Math.max(...props.points)
  const indexOfMax = props.points.indexOf(maxis);
  if (maxis === 0){
    return <div>no vote yet</div>
  }
  return (
    <div>{props.anecdotes[indexOfMax]}</div>
  )
};

const App = () => {
   const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(Array(7).fill(0));



  const handleSelected = () =>{
    setSelected(Math.floor(Math.random() * anecdotes.length));
  }

  const handleVotes = () => {
    const votes = [ ...points ];
    votes[selected] += 1
    setPoints(votes);
  }
  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <div>has {points[selected]} votes</div>
      <div>
        <button onClick={handleSelected}>next anecdote</button>
        <button onClick={handleVotes}>vote</button>
      </div>
      <h1>Anecdote with most votes</h1>
      <MaxAnecdote points={points} anecdotes={anecdotes}/>
    </div>
 );
}

export default App;
