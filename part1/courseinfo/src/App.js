const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
};

const Content = (props) => {
  return (
    <div>
      <Part part={props.part[0]} />
      <Part part={props.part[1]} />
      <Part part={props.part[2]} />
    </div>
  )
};

const Part = (props) => {
  return (
    <p>{props.part.name} {props.part.exercises}</p>
  )
};

const Total = (props) => {
  return (
    <p>Number of exercises {props.exercise1 + props.exercise2 + props.exercise3}</p>
  )
};

const App = () => {
  const course = 'Half Stack application development'
  const part = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course}/>
      <Content part={part} />
      <Total exercise1={part[0].exercises} exercise2={part[1].exercises} exercise3={part[2].exercises}/>
  </div>
 );
}

export default App;
