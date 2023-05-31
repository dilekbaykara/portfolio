import { useState } from "react";
import "./App.css";

// eslint-disable-next-line react-hooks/rules-of-hooks

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className="App">
      <div className={darkMode ? "dark" : "light"}>
        <div className="header-container">
          <header id="App-header">
            <h1>Dilek Baykara</h1>
            <div id="menu-bar">
              <h3>About</h3>
              <h3>Projects</h3>
              <h3>Resume</h3>

              <input type="checkbox" onClick={toggleDarkMode} />
              <h3>Dark</h3>
            </div>
          </header>
          <hr />
        </div>
        <div className="content">
          <div id="intro">Hi, My name is Dilek Baykara</div>
          <div id="about">
            <div id="about-me">About Me</div>
            <p>
              I'm an ambitious, self-taught developer who loves working through
              problems.
            </p>
          </div>
          <div id="skills-box">
            <div id="skills">Current Skills</div>
            <p>Javascript</p>
            <p>React</p>
            <p>TypeScript</p>
            <p>Git</p>
            <p>CSS</p>
            <p>BootStrap</p>
            <p>HTML</p>
            <p>Photoshop</p>
            <p>Illustrator</p>
          </div>
          <div id="projects-div">
            <div id="projects">Projects</div>

            <div>Weather App</div>
            <div>To do List</div>
            <div>Restaurant</div>
            <div>Tic Tac Toe Game</div>
            <div>Library</div>
            <div>Rock Paper Scissors</div>
            <div></div>
          </div>
          <div id="resume-box">
            <div id="resume">Get in Touch</div>
            <p>
              I am looking for new opportunities, if you would like to work
              together, please reach out!
            </p>
            <button id="resume-button">Resume</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
