import logo from './logo.svg';
import './App.css';
import SimpleTabs from './Tab';

function App() {
  return (
    <>
      <SimpleTabs />
      {/* <div className="App">
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
            Learn how to code really well
          </a>
          <button
            onClick={() => {
              fetch('/detonation');
            }}
          >
            detonate
          </button>
        </header>
      </div> */}
    </>
  );
}

export default App;
