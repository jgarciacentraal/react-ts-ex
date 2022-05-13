import * as React from 'react';
import logo from './logo.svg';
import './App.css';

export function App() {
  const [counter, setCounter] = React.useState(0)

  const handleChange = () => setCounter(prevState => prevState + 1)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Counter counter={counter} />
      <Button  handleChange={handleChange}/>
    </div>
  );
}


export function Counter({ counter }: CounterProps) {
  return <div>This is my counter <span>{ counter }</span></div>
}
export function Button({ handleChange }: ButtonProps) {
  return (
    <div style={
      {
        margin: '100px',
      }
    }>
      <button style={
        {
          backgroundColor: '#3a86ff',
          fontFamily: 'sans-serif',
          fontSize: '20px',
          color: 'white',
          padding: '10px',
          borderStyle: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }
      }
      onClick={handleChange}
      > Click me!! </button>
    </div>
  )
}

type CounterProps = {
  counter: number;
}


type ButtonProps = {
  handleChange: () => void;
}