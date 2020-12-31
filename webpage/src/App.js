import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import axios from "axios";

function App() {

  useEffect(() => {
    // 일반 경로 테스트
    axios.get('/example')
      .then( ({ data }) => console.log("example test:", data) )
      .catch( e => console.log(e) );

    // DB 연동 테스트
    axios.get('/example/database')
      .then( ({ data }) => console.log("database test:", data) )
      .catch( e => console.log(e) );
  }, [])

  return (
    <div className="App">
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
