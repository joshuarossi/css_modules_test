import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './styles';

const { app, appHeader, appLink, appLogo, test } = styles;
class App extends Component {
  render() {
    return (
      <div className={app}>
        <header className={appHeader}>
          <img src={logo} className={appLogo} alt="logo" />
          <p className={test}>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>Hello, World!</p>
          <a
            className={appLink}
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
