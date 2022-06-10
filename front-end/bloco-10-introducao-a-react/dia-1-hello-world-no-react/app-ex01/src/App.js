import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

const array = ['Estudar Corse', 'Foco Aula', 'Fazer Exercicios'];

class App extends React.Component {
  render() {
    return (
      <ol>{array.map((index) => Task(index))}</ol>
    )
  }
}

export default App;
