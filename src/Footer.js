import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <footer>
        <small>
          <a
            href="https://github.com/jchabrny/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>
          <span> by </span>
          <a
            href="https://de.linkedin.com/in/dr-jacqueline-chabrny-6a1273149"
            target="_blank"
            rel="noreferrer"
          >
            Jacqueline Chabrny
          </a>
        </small>
      </footer>
    </div>
  );
}
