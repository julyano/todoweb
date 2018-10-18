import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
          <div>
              <form>
                  <input placeholder="O que precisa ser feito?"></input>
                  <button type="submit" style={{display: 'none'}}></button>                           
              </form>
          </div>
      </div>
    );
  }
}

/*<div className="App">
        <header className="App-header">
          <h1 className="App-title">Demo React.js on Spring</h1>
        </header>
        <p className="App-intro">
          This project JULIANO Q is a demo example for the article <a href="">Spring and React.js: the easy way</a>          
        </p>
      </div>l*/

export default App;