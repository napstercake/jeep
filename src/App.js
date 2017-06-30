import React, { Component } from 'react';
import { connect } from 'react-redux';

// CSS
import './App.css';

// Components
import { Donate   } from './components/donate/Donate';
import { Counter  } from './components/counter/Counter';

class App extends React.Component {

  render() {
    return (
      <div className="wrapper">
        <nav className="nav">
          <Donate add={() => this.props.addAmount(10)}></Donate>
          <ul>
            <li><a href="">About me</a></li>
          </ul>
          <div className="clear"></div>
        </nav>
        <div className="wrapper-main">
          <main>
            <div className="container">
              <Counter amount={this.props.amountApp.amount}></Counter>
              <div className="goal">
                $ 27,000.00
              </div>
              <div className="comments">
                <div className="comment">
                  Hope you get it!
                </div>
                <div className="comment">
                  Stupid idea, still works! :)
                </div>
                <div className="comment">
                  Give me a ride
                </div>
                <div className="comment">
                  Hope yo will get it
                </div>
                <div className="comment">
                  rocks!
                </div>
                <div className="comment">
                  Hope you get it!
                </div>
                <div className="comment">
                  Stupid idea, still works! :)
                </div>
                <div className="comment">
                  Give me a ride
                </div>
                <div className="comment">
                  Hope yo will get it
                </div>
                <div className="comment">
                  rocks!
                </div>
                <div className="comment">
                  Hope you get it!
                </div>
                <div className="comment">
                  Stupid idea, still works! :)
                </div>
                <div className="comment">
                  Give me a ride
                </div>
                <div className="comment">
                  Hope yo will get it
                </div>
                <div className="comment">
                  rocks!
                </div>
                <div className="comment">
                  Hope you get it!
                </div>
                <div className="comment">
                  Stupid idea, still works! :)
                </div>
                <div className="comment">
                  Give me a ride
                </div>
                <div className="comment">
                  Hope yo will get it
                </div>
                <div className="comment">
                  rocks!
                </div>
              </div>
            </div>
          </main>
          </div>
      </div>  
      
    );
  }
}

const mapStateToProps = (state) => {
  return {
    amountApp: state.amount,
    commentApp: state.comment
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addAmount: (quantity) => {
      dispatch({
        type: 'ADD_AMOUNT',
        payload: quantity
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
