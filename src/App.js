import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="wrapper-header">
          <header>
            <nav>
              <ul>
                <li><a>About me</a></li>
                <li><a>Contact</a></li>
              </ul>
            </nav>
          </header>
          <div className="wrapper-main">
            <main>
              <div className="container">
                <div className="counter">
                  $ 1.45
                </div>
                <div className="goal">
                  $ 27,000.00
                </div>
                <div className="comments">
                  <div className="comment">
                    this is the comment 1
                  </div>
                  <div className="comment">
                    this is the comment 2
                  </div>
                  <div className="comment">
                    this is the comment 3
                  </div>
                  <div className="comment">
                    this is the comment 4
                  </div>
                  <div className="comment">
                    this is the comment 5
                  </div>
                </div>
              </div>
            </main>
            <footer>
              <ul>
                <li><a>Link 1</a> </li>
                <li><a>Link 2</a> </li>
              </ul>
            </footer>
          </div>
        </div>
      </div>    
    );
  }
}

export default App;
