import { useState } from "react";
import "./App.css";
import imageToAdd from "./../src/images/weather-app.png";
import toDoListImage from "./../src/images/to-do-list.png";
import ticTacToeImage from "./../src/images/tic-tac-toe.png";
import restaurantImage from "./../src/images/restaurant.png";

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
          <header className="App-header">
            <h1>Dilek Baykara</h1>
            <div id="menu-bar">
              <h3>About</h3>
              <h3>Projects</h3>
              <h3>Resume</h3>

              <input type="checkbox" id="checkbox" onClick={toggleDarkMode} />
              <h3>Dark</h3>
            </div>
          </header>
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
            <br></br>
            <div className="svg-box">
              <div className="skill-divs">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  viewBox="0 0 24 24"
                  id="javascript"
                  fill="currentColor"
                >
                  <path d="M0,24h24V0H0V24z M19.784,18.629c-0.255-0.961-2.251-1.185-3.616-2.205c-1.38-0.93-1.709-3.18-0.569-4.471c0.39-0.48,1.034-0.84,1.71-1.005l0.705-0.089c1.365-0.031,2.204,0.329,2.834,1.034c0.182,0.179,0.316,0.36,0.586,0.78c-0.721,0.449-0.721,0.449-1.755,1.125c-0.226-0.48-0.586-0.78-0.976-0.9c-0.6-0.18-1.365,0.014-1.515,0.66c-0.059,0.195-0.045,0.375,0.046,0.705c0.243,0.555,1.061,0.795,1.797,1.14c2.115,0.858,2.828,1.778,3.003,2.873l-0.046-0.067c0.166,0.945-0.045,1.56-0.074,1.65c-0.781,2.67-5.131,2.76-6.871,1.004c-0.36-0.42-0.6-0.629-0.81-1.109l1.83-1.051c0.495,0.75,0.944,1.156,1.755,1.336C18.914,20.174,20.024,19.799,19.784,18.629z M8.133,18.976c0.017,0,0.064,0.091,0.127,0.196c0.233,0.389,0.434,0.659,0.83,0.855c0.386,0.121,1.236,0.209,1.566-0.48c0.201-0.348,0.138-1.479,0.138-2.711c0-1.941,0.009-3.867,0.009-5.805h2.248l-0.004,0.056c0,2.07,0.012,4.125,0,6.179c0.005,1.276,0.113,2.416-0.397,3.346c-0.353,0.72-1.028,1.185-1.811,1.411c-1.203,0.27-2.352,0.105-3.207-0.405c-0.574-0.345-1.019-0.887-1.324-1.517L8.133,18.976z"></path>
                </svg>
                <p>Javascript</p>
              </div>
              <div className="skill-divs">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                  id="react"
                  fill="currentColor"
                >
                  <path d="M11.103,10.43793a1.78593,1.78593,0,1,0,2.43957.65362A1.786,1.786,0,0,0,11.103,10.43793Zm8.0047,1.93768q-.17587-.201-.37116-.40308.13641-.14337.264-.28649c1.60583-1.80427,2.28357-3.61371,1.65558-4.70154-.60217-1.043-2.39343-1.35382-4.63593-.91779q-.33132.06482-.659.14624-.06272-.21624-.13343-.43C14.467,3.49042,13.2381,1.99921,11.98206,2,10.77765,2.00055,9.61359,3.39709,8.871,5.5575q-.10959.31969-.20276.64471-.21908-.05375-.44-.0993c-2.366-.48578-4.27167-.16584-4.89844.9226-.601,1.04376.02753,2.74982,1.52851,4.47211q.22329.25562.45922.49976c-.18542.191-.361.38189-.52465.57171-1.4646,1.698-2.05719,3.37616-1.45716,4.41541.61969,1.07348,2.49854,1.42437,4.7854.97436q.278-.05511.55292-.124.10071.35156.22095.697c.73932,2.11706,1.89685,3.46863,3.097,3.4682,1.23944-.00073,2.48194-1.45288,3.23474-3.65875.05945-.17432.11573-.35535.16907-.54175q.35514.08835.71485.1568c2.20336.41687,3.95251.089,4.55145-.951C21.28058,15.93109,20.64288,14.12933,19.10767,12.37561ZM4.07019,7.45184c.38586-.67,1.94324-.93139,3.98608-.512q.19584.04027.39838.09a20.464,20.464,0,0,0-.42126,2.67767,20.88659,20.88659,0,0,0-2.10389,1.6936q-.21945-.22695-.42718-.4649l.00006.00006C4.21631,9.46057,3.708,8.08081,4.07019,7.45184Zm3.88666,5.72809c-.51056-.3866-.98505-.78265-1.41571-1.181.43036-.39587.90515-.79059,1.41467-1.17615q-.02746.58915-.02722,1.1792Q7.929,12.59117,7.95685,13.17993Zm-.00061,3.94061a7.23675,7.23675,0,0,1-2.63971.09314,1.766,1.766,0,0,1-1.241-.65631c-.36407-.63067.11176-1.978,1.36432-3.43023q.23621-.273.48791-.53174a20.49026,20.49026,0,0,0,2.10712,1.70007,20.80226,20.80226,0,0,0,.42621,2.712Q8.21011,17.07023,7.95624,17.12054Zm7.10113-8.03936q-.50309-.317-1.01861-.61365-.5073-.292-1.0268-.56207c.593-.24933,1.17591-.46228,1.73865-.63581A18.21775,18.21775,0,0,1,15.05737,9.08118ZM9.679,5.83521c.63623-1.85114,1.57763-2.98053,2.30352-2.98084.77308-.00037,1.77753,1.21826,2.43433,3.19763q.064.19355.121.38928a20.478,20.478,0,0,0-2.52716.9712,20.06145,20.06145,0,0,0-2.519-.98194Q9.578,6.13062,9.679,5.83521ZM9.27863,7.259a18.30717,18.30717,0,0,1,1.72967.642Q9.95746,8.4433,8.96094,9.0824C9.0412,8.4444,9.148,7.83313,9.27863,7.259ZM8.9624,14.91968q.49695.31813,1.00843.61273.52174.30039,1.05737.57556a18.19577,18.19577,0,0,1-1.74445.66492C9.15161,16.1908,9.04364,15.56879,8.9624,14.91968Zm5.45569,3.14551A7.23556,7.23556,0,0,1,13.18,20.39844l-.00006.00006a1.76585,1.76585,0,0,1-1.18841.747c-.72821.00042-1.65766-1.085-2.28992-2.89545q-.11169-.32108-.20551-.648a20.10863,20.10863,0,0,0,2.52918-1.0097,20.79976,20.79976,0,0,0,2.54736.97851Q14.50141,17.81983,14.41809,18.06519Zm.36224-1.32422c-.56921-.176-1.16058-.39252-1.76214-.64551q.50867-.2677,1.02472-.56543.52955-.30579,1.0321-.62689A18.1524,18.1524,0,0,1,14.78033,16.741Zm.44629-4.74268q.00111.91095-.05688,1.82044c-.49268.33343-1.01282.659-1.554.97143-.53894.31116-1.07293.59711-1.59674.8559q-.82682-.39624-1.62176-.854-.79047-.455-1.54468-.969-.06894-.90921-.06946-1.82172l.00012.00019q-.00063-.91187.06794-1.82184c.49255-.33637,1.00891-.66168,1.54278-.96991.53632-.30969,1.077-.59442,1.61469-.85248q.81664.39688,1.60382.85065.78992.454,1.549.95868.06519.91443.06524,1.83166Zm.95673-5.09283c1.92133-.37372,3.37-.12232,3.73291.50622.3866.66962-.16748,2.1485-1.55383,3.70636l-.00006.00006q-.1149.12891-.23841.25891A20.06118,20.06118,0,0,0,15.98,9.68915a20.04054,20.04054,0,0,0-.40546-2.64893Q15.88486,6.96387,16.18335,6.90546Zm-.12988,3.8847A18.16447,18.16447,0,0,1,17.51483,11.978a18.11912,18.11912,0,0,1-1.45672,1.20831q.02325-.59391.02288-1.18842Q16.08072,11.39389,16.05347,10.79016Zm3.8681,5.78876c-.36346.63116-1.76788.89435-3.65222.53784q-.32391-.06115-.66474-.14557a20.069,20.069,0,0,0,.38746-2.68176,19.93914,19.93914,0,0,0,2.13708-1.71588q.17643.18329.33563.36487v-.00007a7.23437,7.23437,0,0,1,1.40308,2.23792A1.76563,1.76563,0,0,1,19.92157,16.57892Z"></path>
                </svg>
                <p>React</p>
              </div>
              <div className="skill-divs">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  viewBox="0 0 24 24"
                  id="typescript"
                  fill="currentColor"
                >
                  <path d="M0,12v12h24V0H0V12z M14.563,19.626c0.108-0.061,0.511-0.294,0.892-0.515l0.69-0.4l0.145,0.214c0.202,0.308,0.643,0.731,0.91,0.872c0.766,0.404,1.817,0.347,2.335-0.118c0.193-0.163,0.314-0.405,0.314-0.675c0-0.016,0-0.031-0.001-0.047v0.002c0-0.278-0.035-0.4-0.18-0.61c-0.186-0.266-0.567-0.49-1.649-0.96c-1.238-0.533-1.771-0.864-2.259-1.39c-0.294-0.334-0.521-0.736-0.653-1.178l-0.006-0.022c-0.091-0.339-0.114-1.189-0.042-1.531c0.255-1.197,1.158-2.03,2.461-2.278c0.423-0.08,1.406-0.05,1.821,0.053v0.001c0.61,0.152,1.074,0.423,1.501,0.865c0.221,0.236,0.549,0.666,0.575,0.77c0.008,0.03-1.036,0.73-1.668,1.123c-0.023,0.015-0.115-0.084-0.217-0.236c-0.31-0.45-0.633-0.644-1.128-0.678c-0.728-0.05-1.196,0.331-1.192,0.967c0,0.011-0.001,0.024-0.001,0.037c0,0.151,0.038,0.293,0.105,0.417l-0.002-0.005c0.16,0.331,0.458,0.53,1.39,0.933c1.719,0.74,2.454,1.227,2.911,1.92c0.51,0.773,0.625,2.008,0.278,2.926c-0.38,0.998-1.325,1.676-2.655,1.9c-0.411,0.073-1.386,0.062-1.828-0.018c-0.964-0.172-1.878-0.648-2.442-1.273c-0.221-0.243-0.652-0.88-0.625-0.925C14.354,19.751,14.453,19.69,14.563,19.626z M5.258,12.065c0-0.534,0.011-0.98,0.026-0.99c0.012-0.016,1.913-0.024,4.217-0.02l4.195,0.012l0.011,0.979l0.008,0.983H10.59v8.876H8.38v-8.876H5.258V12.065z"></path>
                </svg>
                <p>TypeScript</p>
              </div>
              <div className="skill-divs">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 128 128"
                  id="git"
                >
                  <path
                    fill="currentColor"
                    d="M124.737 58.378l-55.116-55.114c-3.172-3.174-8.32-3.174-11.497 0l-11.444 11.446 14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679-3.78 3.78-9.901 3.78-13.683 0-2.842-2.844-3.545-7.019-2.105-10.521l-13.048-13.048-.002 34.341c.922.455 1.791 1.063 2.559 1.828 3.778 3.777 3.778 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-3.778-9.905 0-13.683.934-.933 2.014-1.638 3.167-2.11v-34.659c-1.153-.472-2.231-1.172-3.167-2.111-2.862-2.86-3.551-7.06-2.083-10.576l-14.313-14.313-37.792 37.79c-3.175 3.177-3.175 8.325 0 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858c3.174-3.176 3.174-8.327-.001-11.501z"
                  ></path>
                </svg>
                <p>Git</p>
              </div>
              <div className="skill-divs">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  viewBox="0 0 24 24"
                  id="css3"
                  fill="currentColor"
                >
                  <path d="M22,3l-3,15.1l-9.1,3l-7.9-3L2.8,14h3.4l-0.4,1.7l4.8,1.8l5.5-1.8l0.8-3.8H3.2l0.7-3.4h13.6L18,6.4H4.3L5,3H22z"></path>
                </svg>
                <p>CSS</p>
              </div>
              <div className="skill-divs">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
                <p>HTML</p>
              </div>
              <div className="skill-divs">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  viewBox="0 0 24 24"
                  id="adobe-photoshop"
                  fill="currentColor"
                >
                  <path d="M22,0H2C0.896,0,0,0.895,0,2v20c0,1.105,0.896,2,2,2h20c1.104,0,2-0.895,2-2V2C24,0.895,23.104,0,22,0z M8.35,12.41c-0.38,0-0.51-0.017-0.775-0.017v3.842c0,0.083-0.033,0.116-0.115,0.116H5.916c-0.083,0-0.115-0.03-0.115-0.113V5.48H5.8c0-0.067,0.14-0.116,0.224-0.116c0.644-0.033,1.588-0.05,2.578-0.05c2.772,0,3.85,1.52,3.85,3.466C12.452,11.32,10.61,12.41,8.35,12.41z M15.555,16.502c-0.876,0-1.62-0.183-2.05-0.43c-0.065-0.033-0.08-0.082-0.08-0.165V14.44c0-0.1,0.048-0.133,0.114-0.084c0.624,0.413,1.352,0.594,2.012,0.594c0.792,0,1.122-0.33,1.122-0.776c0-0.363-0.23-0.677-1.237-1.205c-1.42-0.68-2.014-1.37-2.014-2.527c0-1.287,1.006-2.36,2.755-2.36c0.86,0,1.464,0.132,1.794,0.28c0.082,0.05,0.1,0.132,0.1,0.198v1.37c0,0.083-0.05,0.133-0.15,0.1c-0.444-0.264-1.1-0.43-1.743-0.43l0.004,0.004c-0.792,0-1.056,0.396-1.056,0.726c0,0.363,0.18,0.61,1.237,1.155c1.568,0.76,2.062,1.485,2.062,2.557C18.425,15.642,17.205,16.502,15.555,16.502z"></path>
                  <path d="M8.533,6.898c-0.396,0-0.775,0.016-0.957,0.033v3.861c0.23,0.016,0.412,0.016,0.809,0.016c1.17,0,2.27-0.412,2.27-1.996C10.655,7.542,9.869,6.898,8.533,6.898z"></path>
                </svg>
                <p>Photoshop</p>
              </div>
              <div className="skill-divs">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  viewBox="0 0 24 24"
                  id="adobe-illustrator"
                  fill="currentColor"
                >
                  <path d="M22,0H2C0.896,0,0,0.895,0,2v20c0,1.105,0.896,2,2,2h20c1.104,0,2-0.895,2-2V2C24,0.895,23.104,0,22,0z M14.152,16.35h-1.65c-0.083,0-0.132-0.02-0.148-0.086l-0.825-3.015H8.322l0.003,0.001l-0.792,2.998c-0.017,0.083-0.05,0.102-0.148,0.102H5.917c-0.1,0-0.115-0.033-0.1-0.148l2.84-9.945c0.05-0.18,0.082-0.338,0.098-0.833c0-0.066,0.033-0.1,0.083-0.1h2.096c0.066,0,0.1,0.018,0.116,0.1l3.185,10.794C14.252,16.301,14.235,16.35,14.152,16.35z M17.531,16.242c0,0.083-0.016,0.116-0.115,0.116h-1.55c-0.1,0-0.133-0.05-0.133-0.13V8.34l-0.008,0.001c0-0.08,0.033-0.11,0.116-0.11h1.57c0.088,0,0.12,0.033,0.12,0.116V16.242z M16.619,7.09c-0.6,0-1.01-0.363-1.01-1.023h0.004c0-0.643,0.445-1.023,1.023-1.023c0.61,0,1.023,0.412,1.023,1.023C17.659,6.727,17.229,7.09,16.619,7.09z"></path>
                  <path d="M9.908,6.925c-0.214,1.17-0.742,3.15-1.155,4.7h2.36c-0.28-1.106-0.94-3.528-1.188-4.7H9.908z"></path>
                </svg>
                <p>Illustrator</p>
              </div>
              <div className="skill-divs">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  viewBox="0 0 24 24"
                  id="adobe-aftereffects"
                  fill="currentColor"
                >
                  <path d="M16.433 9.541c-.957 0-1.37.842-1.468 1.732h2.013l.002.002c.512 0 .693 0 .742-.016 0-.068.017-.125.017-.174C17.739 10.54 17.473 9.541 16.433 9.541zM8.368 6.926c-.214 1.17-.756 3.148-1.17 4.7H9.59c-.28-1.106-.96-3.53-1.206-4.7H8.368z"></path>
                  <path d="M0,2v20c0,1.105,0.895,2,2,2h20c1.105,0,2-0.895,2-2V2c0-1.105-0.895-2-2-2H2C0.895,0,0,0.895,0,2z M12.609,16.346h-1.65c-0.082,0-0.13-0.03-0.147-0.096l-0.825-3.002h-3.2L6.784,13.25l-0.792,2.986c-0.017,0.083-0.05,0.113-0.148,0.113H4.376c-0.1,0-0.116-0.035-0.1-0.15l2.84-9.933c0.05-0.18,0.082-0.325,0.098-0.82c0-0.066,0.033-0.1,0.083-0.1h2.096c0.066,0,0.1,0.018,0.116,0.1l3.183,10.77C12.708,16.298,12.692,16.346,12.609,16.346z M19.354,12.46c-0.017,0.082-0.05,0.11-0.132,0.127c-0.198,0.033-0.792,0.066-1.667,0.066H14.95c0.018,1.351,0.661,2.257,2.178,2.257c0.594,0,1.103-0.078,1.63-0.31c0.067-0.032,0.117-0.015,0.117,0.067v1.254c0,0.1-0.033,0.15-0.1,0.2c-0.527,0.264-1.184,0.38-2.01,0.38c-2.64,0-3.63-1.947-3.63-4.125c0-2.36,1.222-4.29,3.367-4.29c2.178,0,2.937,1.833,2.937,3.317C19.439,11.883,19.404,12.279,19.354,12.46z"></path>
                </svg>
                <p>After Effects</p>
              </div>
            </div>
          </div>
          <div id="projects-div">
            <div id="projects">Projects</div>
            <div id="project-div-1">
              <div id="weather-app" className="project-divs">
                <img
                  alt="project-preview"
                  src={imageToAdd}
                  id="weather-app-img"
                ></img>
                <div className="project-title-div">
                  <div className="project-title">Weather App</div>
                  <div className="project-icon-div">
                    <a
                      id="github-icon"
                      className="project-icon"
                      href="CHANGE WEBSITE FOR THIS"
                      color="currentColor"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        data-name="Layer 1"
                        viewBox="0 0 24 24"
                        id="github-logo-project"
                        fill="currentColor"
                        preserveAspectRatio="none"
                      >
                        <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path>
                      </svg>
                    </a>
                    <svg
                      id="www-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                    >
                      <svg
                        className="project-icon"
                        id="www-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 92 92"
                      >
                        <path
                          d="M46 0C20.6 0 0 20.6 0 46s20.6 46 46 46 46-20.6 46-46S71.4 0 46 0zm3.7 83.8c-.2 0-.4 0-.7.1V62.2c5.2-.1 9.9-.2 14.2-.5-3.8 11.7-10.9 19.5-13.5 22.1zm-7.4 0c-2.7-2.7-9.7-10.5-13.5-22.1 4.2.3 9 .5 14.2.5v21.7c-.2 0-.4-.1-.7-.1zM8 46c0-2.5.3-5 .7-7.4 2.2-.4 6.4-1 12.3-1.6-.5 2.9-.8 5.9-.8 9.1 0 3.2.3 6.2.7 9-5.8-.6-10.1-1.2-12.3-1.6-.3-2.5-.6-5-.6-7.5zm18.3 0c0-3.4.4-6.6 1-9.6 4.6-.3 9.8-.6 15.7-.6v20.4c-5.8-.1-11.1-.3-15.8-.7-.5-2.9-.9-6.1-.9-9.5zM49.6 8.2c2.7 2.7 9.6 10.7 13.5 22.1-4.2-.3-8.9-.5-14.1-.5V8.1c.2 0 .4.1.6.1zM43 8.1v21.7c-5.2.1-9.9.2-14.1.5 3.8-11.4 10.8-19.4 13.4-22.1.3 0 .5-.1.7-.1zm6 48.1V35.8c5.8.1 11.1.3 15.7.6.6 3 1 6.2 1 9.6 0 3.4-.3 6.6-.9 9.6-4.6.3-9.9.5-15.8.6zM70.9 37c5.9.6 10.1 1.2 12.3 1.6.5 2.4.8 4.9.8 7.4s-.3 5-.7 7.4c-2.2.4-6.4 1-12.3 1.6.5-2.9.7-5.9.7-9.1 0-3-.3-6.1-.8-8.9zm10.5-4.8c-2.8-.4-6.8-.9-11.9-1.4-2.4-8.6-6.6-15.5-10.1-20.4 10.1 3.8 18.1 11.8 22 21.8zM32.6 10.4c-3.6 4.8-7.7 11.7-10.1 20.3-5 .4-9 1-11.9 1.4 3.9-9.9 12-17.9 22-21.7zm-22 49.4c2.8.4 6.8.9 11.8 1.4 2.4 8.6 6.4 15.5 10 20.3-10-3.9-17.9-11.8-21.8-21.7zm49 21.7c3.6-4.8 7.6-11.6 10-20.2 5-.4 9-1 11.8-1.4-3.9 9.8-11.8 17.7-21.8 21.6z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </svg>
                  </div>
                </div>
                <div className="language-box">
                  React, TypeScript, Public API, CSS
                </div>

                <div className="project-description">
                  Weather App that displays temperature details, 5 day forecast,
                  hourly forecast graph for 24 hr period, and a geo location
                  function.
                </div>
              </div>

              <div className="project-divs">
                <img
                  alt="project-preview"
                  src={toDoListImage}
                  id="to-do-app-img"
                ></img>
                <div className="project-title-div">
                  <div className="project-title">To Do List</div>
                  <div className="project-icon-div">
                    <a
                      id="github-icon"
                      className="project-icon"
                      href="CHANGE WEBSITE FOR THIS"
                      color="currentColor"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        data-name="Layer 1"
                        viewBox="0 0 24 24"
                        id="github-logo-project"
                        fill="currentColor"
                        preserveAspectRatio="none"
                      >
                        <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path>
                      </svg>
                    </a>
                    <svg
                      id="www-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                    >
                      <svg
                        className="project-icon"
                        id="www-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 92 92"
                      >
                        <path
                          d="M46 0C20.6 0 0 20.6 0 46s20.6 46 46 46 46-20.6 46-46S71.4 0 46 0zm3.7 83.8c-.2 0-.4 0-.7.1V62.2c5.2-.1 9.9-.2 14.2-.5-3.8 11.7-10.9 19.5-13.5 22.1zm-7.4 0c-2.7-2.7-9.7-10.5-13.5-22.1 4.2.3 9 .5 14.2.5v21.7c-.2 0-.4-.1-.7-.1zM8 46c0-2.5.3-5 .7-7.4 2.2-.4 6.4-1 12.3-1.6-.5 2.9-.8 5.9-.8 9.1 0 3.2.3 6.2.7 9-5.8-.6-10.1-1.2-12.3-1.6-.3-2.5-.6-5-.6-7.5zm18.3 0c0-3.4.4-6.6 1-9.6 4.6-.3 9.8-.6 15.7-.6v20.4c-5.8-.1-11.1-.3-15.8-.7-.5-2.9-.9-6.1-.9-9.5zM49.6 8.2c2.7 2.7 9.6 10.7 13.5 22.1-4.2-.3-8.9-.5-14.1-.5V8.1c.2 0 .4.1.6.1zM43 8.1v21.7c-5.2.1-9.9.2-14.1.5 3.8-11.4 10.8-19.4 13.4-22.1.3 0 .5-.1.7-.1zm6 48.1V35.8c5.8.1 11.1.3 15.7.6.6 3 1 6.2 1 9.6 0 3.4-.3 6.6-.9 9.6-4.6.3-9.9.5-15.8.6zM70.9 37c5.9.6 10.1 1.2 12.3 1.6.5 2.4.8 4.9.8 7.4s-.3 5-.7 7.4c-2.2.4-6.4 1-12.3 1.6.5-2.9.7-5.9.7-9.1 0-3-.3-6.1-.8-8.9zm10.5-4.8c-2.8-.4-6.8-.9-11.9-1.4-2.4-8.6-6.6-15.5-10.1-20.4 10.1 3.8 18.1 11.8 22 21.8zM32.6 10.4c-3.6 4.8-7.7 11.7-10.1 20.3-5 .4-9 1-11.9 1.4 3.9-9.9 12-17.9 22-21.7zm-22 49.4c2.8.4 6.8.9 11.8 1.4 2.4 8.6 6.4 15.5 10 20.3-10-3.9-17.9-11.8-21.8-21.7zm49 21.7c3.6-4.8 7.6-11.6 10-20.2 5-.4 9-1 11.8-1.4-3.9 9.8-11.8 17.7-21.8 21.6z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </svg>
                  </div>
                </div>
                <div className="language-box">React, TypeScript, CSS</div>
                <div className="project-description">
                  Users can add tasks with due date and mark tasks are complete
                  or incomplete. For easier tracking, user can view tasks as
                  All, Active, or Done.
                </div>
              </div>
            </div>
            <div id="project-div-2">
              <div className="project-divs">
                <img
                  alt="project-preview"
                  src={restaurantImage}
                  id="tic-tac-toe-img"
                ></img>
                <div className="project-title-div">
                  <div className="project-title">Restaurant</div>
                  <div className="project-icon-div">
                    <a
                      id="github-icon"
                      className="project-icon"
                      href="https://github.com/dilekbaykara/restaurant"
                      color="currentColor"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        data-name="Layer 1"
                        viewBox="0 0 24 24"
                        id="github-logo-project"
                        fill="currentColor"
                        preserveAspectRatio="none"
                      >
                        <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path>
                      </svg>
                    </a>
                    <a
                      id="www-icon"
                      href="https://dilekbaykara.github.io/restaurant/"
                    >
                      <svg
                        id="www-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                      >
                        <svg
                          className="project-icon"
                          id="www-icon"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 92 92"
                        >
                          <path
                            d="M46 0C20.6 0 0 20.6 0 46s20.6 46 46 46 46-20.6 46-46S71.4 0 46 0zm3.7 83.8c-.2 0-.4 0-.7.1V62.2c5.2-.1 9.9-.2 14.2-.5-3.8 11.7-10.9 19.5-13.5 22.1zm-7.4 0c-2.7-2.7-9.7-10.5-13.5-22.1 4.2.3 9 .5 14.2.5v21.7c-.2 0-.4-.1-.7-.1zM8 46c0-2.5.3-5 .7-7.4 2.2-.4 6.4-1 12.3-1.6-.5 2.9-.8 5.9-.8 9.1 0 3.2.3 6.2.7 9-5.8-.6-10.1-1.2-12.3-1.6-.3-2.5-.6-5-.6-7.5zm18.3 0c0-3.4.4-6.6 1-9.6 4.6-.3 9.8-.6 15.7-.6v20.4c-5.8-.1-11.1-.3-15.8-.7-.5-2.9-.9-6.1-.9-9.5zM49.6 8.2c2.7 2.7 9.6 10.7 13.5 22.1-4.2-.3-8.9-.5-14.1-.5V8.1c.2 0 .4.1.6.1zM43 8.1v21.7c-5.2.1-9.9.2-14.1.5 3.8-11.4 10.8-19.4 13.4-22.1.3 0 .5-.1.7-.1zm6 48.1V35.8c5.8.1 11.1.3 15.7.6.6 3 1 6.2 1 9.6 0 3.4-.3 6.6-.9 9.6-4.6.3-9.9.5-15.8.6zM70.9 37c5.9.6 10.1 1.2 12.3 1.6.5 2.4.8 4.9.8 7.4s-.3 5-.7 7.4c-2.2.4-6.4 1-12.3 1.6.5-2.9.7-5.9.7-9.1 0-3-.3-6.1-.8-8.9zm10.5-4.8c-2.8-.4-6.8-.9-11.9-1.4-2.4-8.6-6.6-15.5-10.1-20.4 10.1 3.8 18.1 11.8 22 21.8zM32.6 10.4c-3.6 4.8-7.7 11.7-10.1 20.3-5 .4-9 1-11.9 1.4 3.9-9.9 12-17.9 22-21.7zm-22 49.4c2.8.4 6.8.9 11.8 1.4 2.4 8.6 6.4 15.5 10 20.3-10-3.9-17.9-11.8-21.8-21.7zm49 21.7c3.6-4.8 7.6-11.6 10-20.2 5-.4 9-1 11.8-1.4-3.9 9.8-11.8 17.7-21.8 21.6z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="language-box">Javascript, Webpack, CSS</div>
                <div className="project-description">Restaurant</div>
              </div>
              <div className="project-divs">
                <img
                  alt="project-preview"
                  src={ticTacToeImage}
                  id="tic-tac-toe-img"
                ></img>
                <div className="project-title-div">
                  <div className="project-title">Tic Tac Toe Game</div>
                  <div className="project-icon-div">
                    <a
                      id="github-icon"
                      className="project-icon"
                      href="https://github.com/dilekbaykara/tic-tac-toe"
                      color="currentColor"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        data-name="Layer 1"
                        viewBox="0 0 24 24"
                        id="github-logo-project"
                        fill="currentColor"
                        preserveAspectRatio="none"
                      >
                        <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path>
                      </svg>
                    </a>
                    <a
                      id="www-icon"
                      href="https://dilekbaykara.github.io/tic-tac-toe/"
                    >
                      <svg
                        id="www-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                      >
                        <svg
                          className="project-icon"
                          id="www-icon"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 92 92"
                        >
                          <path
                            d="M46 0C20.6 0 0 20.6 0 46s20.6 46 46 46 46-20.6 46-46S71.4 0 46 0zm3.7 83.8c-.2 0-.4 0-.7.1V62.2c5.2-.1 9.9-.2 14.2-.5-3.8 11.7-10.9 19.5-13.5 22.1zm-7.4 0c-2.7-2.7-9.7-10.5-13.5-22.1 4.2.3 9 .5 14.2.5v21.7c-.2 0-.4-.1-.7-.1zM8 46c0-2.5.3-5 .7-7.4 2.2-.4 6.4-1 12.3-1.6-.5 2.9-.8 5.9-.8 9.1 0 3.2.3 6.2.7 9-5.8-.6-10.1-1.2-12.3-1.6-.3-2.5-.6-5-.6-7.5zm18.3 0c0-3.4.4-6.6 1-9.6 4.6-.3 9.8-.6 15.7-.6v20.4c-5.8-.1-11.1-.3-15.8-.7-.5-2.9-.9-6.1-.9-9.5zM49.6 8.2c2.7 2.7 9.6 10.7 13.5 22.1-4.2-.3-8.9-.5-14.1-.5V8.1c.2 0 .4.1.6.1zM43 8.1v21.7c-5.2.1-9.9.2-14.1.5 3.8-11.4 10.8-19.4 13.4-22.1.3 0 .5-.1.7-.1zm6 48.1V35.8c5.8.1 11.1.3 15.7.6.6 3 1 6.2 1 9.6 0 3.4-.3 6.6-.9 9.6-4.6.3-9.9.5-15.8.6zM70.9 37c5.9.6 10.1 1.2 12.3 1.6.5 2.4.8 4.9.8 7.4s-.3 5-.7 7.4c-2.2.4-6.4 1-12.3 1.6.5-2.9.7-5.9.7-9.1 0-3-.3-6.1-.8-8.9zm10.5-4.8c-2.8-.4-6.8-.9-11.9-1.4-2.4-8.6-6.6-15.5-10.1-20.4 10.1 3.8 18.1 11.8 22 21.8zM32.6 10.4c-3.6 4.8-7.7 11.7-10.1 20.3-5 .4-9 1-11.9 1.4 3.9-9.9 12-17.9 22-21.7zm-22 49.4c2.8.4 6.8.9 11.8 1.4 2.4 8.6 6.4 15.5 10 20.3-10-3.9-17.9-11.8-21.8-21.7zm49 21.7c3.6-4.8 7.6-11.6 10-20.2 5-.4 9-1 11.8-1.4-3.9 9.8-11.8 17.7-21.8 21.6z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="language-box">Javascript, HTML, CSS</div>
                <div className="project-description">Tic Tac Toe</div>
              </div>
              {/* <div className="project-divs">
                <div className="project-title">Library</div>
                <div className="language-box">Javascript, HTML, CSS</div>
                <div className="project-description">Library</div>
              </div> */}
            </div>
            <div></div>
          </div>
          <div id="resume-box">
            <div id="resume">Get in Touch</div>
            <p>
              I am looking for new opportunities, if you would like to work
              together, please reach out!
            </p>
            <button id="resume-button">Download Resume</button>
            <div className="icon-footer">
              <a
                id="github-icon"
                className="footer-icon"
                href="https://github.com/dilekbaykara"
                color="currentColor"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                  id="github-logo"
                  fill="currentColor"
                >
                  <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path>
                </svg>
              </a>
              <a
                id="linked-in-icon"
                className="footer-icon"
                href="https://www.linkedin.com/in/dilek-b-b33a9148/"
                color="currentColor"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                  width="256"
                  height="256"
                  id="linked-in"
                >
                  <path
                    d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48h0a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="mail"
                x="0"
                y="0"
                version="1.1"
                viewBox="0 0 29 29"
              >
                <path
                  fill="currentColor"
                  d="M2 7.42v14.172l7.086-7.086zM3.408 6l8.971 8.971c1.133 1.133 3.109 1.133 4.242 0L25.592 6H3.408z"
                ></path>
                <path
                  fill="currentColor"
                  d="M18.035 16.385c-.943.944-2.199 1.465-3.535 1.465s-2.592-.521-3.535-1.465l-.465-.465L3.42 23h22.16l-7.08-7.08-.465.465zM19.914 14.506L27 21.592V7.42z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
