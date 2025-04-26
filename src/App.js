import myLogo from './assets/myL/myLogo.png'; // fixed: consistent name
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={myLogo} className="logo" alt="My logo" /> {/* fixed: matches import name */}

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://www.propelleraero.com/dirtmate/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn propelleraero
        </a>
      </header>
    </div>
  );
}

export default App;
