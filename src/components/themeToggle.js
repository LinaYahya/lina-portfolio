import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import './layout.css';

class ThemeToggle extends React.Component {
  render() {
    return (
      <ThemeToggler >
        {({ theme, toggleTheme }) => (
          <>
          <span style={{marginLeft: '90%'}}>Dark</span>
          <label class="switch">
            <input
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
            />{' '}
              <span class="slider round"></span>

          </label>
          </>

        )}
      </ThemeToggler>
    )
  }
}

export default ThemeToggle;