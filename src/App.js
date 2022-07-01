import logo from "./WJLlogo.png";
import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo" />
        <h1>Dictionary</h1>
      </header>
        <main>
          <Dictionary defaultKeyword="smile"/>
        </main>
      <footer className='App-footer'>
        <small>
          Coded by <a href="https://www.linkedin.com/in/winnieelam/" target="_blank" rel="noreferrer">Winnie Lam</a>. Open-sourced on <a href="https://github.com/Winniee356/Dictionary-react"target="_blank" rel="noreferrer">Github</a>.
        </small>
      </footer>
      </div>
    </div>
  );
}

export default App;
