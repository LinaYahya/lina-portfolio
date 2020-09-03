import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import './layout/layout.css';

class ThemeToggle extends React.Component {
  render() {
    return (
      <ThemeToggler >
        {({ theme, toggleTheme }) => (
          <>
          <label className="switch" title="Dark mode">
            <input
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
            />{' '}
              <span className="slider round"></span>

          </label>
          </>

        )}
      </ThemeToggler>
    )
  }
}

export default ThemeToggle;