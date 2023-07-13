import React from "react";
import pdf from "./types.s";
const resumePDF = pdf("Dilek_Baykara_Resume_2023_.pdf");
function Resume() {
  return (
    <div id="resume-box">
      <div id="resume">Get in Touch</div>
      <p id="resume-description">
        If you would like to work together, please reach out!
      </p>
      <a href={resumePDF} download={resumePDF}>
        <button id="resume-button">Download Resume</button>
      </a>
      <div className="icon-footer" id="resume-icons">
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
            className="footer-icon"
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
            className="footer-icon"
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
          onClick={() => (window.location.href = "mailto:baykara.d@gmail.com")}
          xmlns="http://www.w3.org/2000/svg"
          id="mail"
          className="footer-icon"
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
  );
}

export default Resume;
