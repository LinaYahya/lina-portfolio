import React from "react"
import "./footer.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_contact">
        <h2>
          Get in Touch <span>👋</span>
        </h2>
        <p>
          Feel free to email me about anything. Give some feedback? You can also
          reach me around the web:{" "}
          <a href="https://github.com/LinaYahya" target="_blank">
            Github
          </a>
          ,
          <a
            href="https://www.linkedin.com/in/lina-ebeid-3b95201b3/"
            target="_blank"
          >
            LinkedIn
          </a>
        </p>
      </div>
      <div className="footer_icon">
        <span aria-label="Copyright">
          © 2020 Lina Ebeid. All Rights Reserved.
        </span>
        <div>
          <span>
            <a
              href="linaebe0@gmail.com"
              aria-label="linaebe0@gmail.com"
              title="Email"
            >
              <i class="fas fa-envelope"></i>
            </a>
          </span>
          <span>
            <a
              href="https://github.com/LinaYahya"
              aria-label="Visit GitHub profile"
              title="Visit GitHub profile"
              target="_blank"
            >
              <i class="fab fa-github"></i>
            </a>
          </span>
          <span>
            <a
              href="https://www.linkedin.com/in/lina-ebeid-3b95201b3/"
              aria-label="Visit LinkedIn profile"
              title="Visit LinkedIn profile"
              target="_blank"
            >
              <i class="fab fa-linkedin"></i>
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
