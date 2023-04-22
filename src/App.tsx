import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dilek Baykara</h1>
        <div id="menu-bar">
          <h3>About</h3>
          <h3>Projects</h3>
          <h3>Resume</h3>
          <h3>Dark</h3>
        </div>
      </header>
      <hr></hr>

      <div id="about"></div>
      <div id="about-me">About Me</div>
      <p>
        I'm an ambitious, self-taught developer who loves working through
        problems.
      </p>
      <div id="skills">Current Skills</div>
      <p>Javascript</p>
      <p>React</p>
      <p>TypeScript</p>
    </div>
  );
}

export default App;
