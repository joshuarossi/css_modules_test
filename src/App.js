import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './styles';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <header className={styles.AppHeader}>
          <img src={logo} className={styles.AppLogo} alt="logo" />
          <p className={styles.test}>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>Hello, World!</p>
          <a
            className={styles.AppLink}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
