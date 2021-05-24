import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const meusCompromissos = ['Jogar Bola', 'Malhar', 'Estudar programação'];

function App() {
  return (
    meusCompromissos.map((task) => Task(task))
  );
}

export default App;
