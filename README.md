# css_modules_test
This is an example of one possible theming implementation

This is an example of using CSS Modules to allow for custom themes to override base styles

  ## App.js
```
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styles from './styles'
import {test} from './styles/base.module.css'


class App extends Component {
	render() {
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
```
##  base.module.css
```
.test {
color: red;
background-color: blue;
border: 1px solid green;
}

p {
color: blue;
}
```

##  custom.module.css
```
.test {
color: orange;
background-color: blue;
border: 1px solid white;
}
```

![Screenshot](theme_example.png)
