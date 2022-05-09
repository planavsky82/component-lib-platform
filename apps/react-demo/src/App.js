import logo from './logo.svg';
import './App.css';
import { MyComponent } from '@planit/react-components';
import { defineCustomElements } from '@planit/components/loader';
defineCustomElements();

function App() {
  return (
    <div className="App">
      <MyComponent first="AAAAAAAA" middle="BBBBBBBB" last="CCCCCCCC"></MyComponent>
      <planit-button></planit-button>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
    </div>
  );
}

export default App;
