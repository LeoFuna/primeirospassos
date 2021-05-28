import React from 'react'
import './App.css';
import DadosPessoais from './DadosPessoais'

class App extends React.Component {
  render() {
    return (
      <div>
        <form>
          <DadosPessoais />
        </form>
      </div>
    );
  }
}

export default App;
