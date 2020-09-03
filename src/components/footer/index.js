import React from "react"
import "./footer.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_contact">
        <h2>
          Get in Touch{" "}
          <span role="img" aria-label="hi">
            👋
          </span>
        </h2>
        <p>
          Feel free to email me about anything.
          <br />
          Give some feedback? You can also reach me around the web:{" "}
          <a
            href="https://github.com/LinaYahya"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          ,
          <a
            href="https://www.linkedin.com/in/lina-ebeid-3b95201b3/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </p>
      </div>
      <div className="footer_icon">
        <p aria-label="Copyright" >
          © 2020 Lina Ebeid. All Rights Reserved.
        </p>
        <div>
          <span>
            <a
              href="mailto:linaebe0@gmail.com"
              aria-label="linaebe0@gmail.com"
              title="Email"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </span>
          <span>
            <a
              href="https://github.com/LinaYahya"
              aria-label="Visit GitHub profile"
              title="Visit GitHub profile"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </span>
          <span>
            <a
              href="https://www.linkedin.com/in/lina-ebeid-3b95201b3/"
              aria-label="Visit LinkedIn profile"
              title="Visit LinkedIn profile"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
