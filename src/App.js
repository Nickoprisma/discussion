import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Discussion</h1>
        <p>
          This is not about strong positions, it is about expanding wisdom 
        </p>
        <img src={logo} className="App-logo" alt="logo ying yang" />
        <a
          className="App-link"
          href="https://opensea.io/collection/questioning-and-understanding-expands-wisdom"
          target="_blank"
          aria-label="Navigate to the opensea collection Discussion"
          rel="noopener noreferrer"
        >
          See the entire collection
        </a>
      </header>
    </div>
  );
}

export default App;