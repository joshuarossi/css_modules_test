import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styles from './styles'
import {test} from './styles/base.module.css'


class App extends Component {
	render() {
		console.log(styles)
		console.log(test)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className={styles.test}>
            Edit <code>src/App.js</code> and save to reload.
		    </p>
		    <p>Hello, World!</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
