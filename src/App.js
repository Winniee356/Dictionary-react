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
          Coded by Winnie Lam
        </small>
      </footer>
      </div>
    </div>
  );
}

export default App;
