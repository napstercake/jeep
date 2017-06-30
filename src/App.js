import React, { Component } from 'react';
import { connect } from 'react-redux';

// CSS
import './App.css';

// Components
import { Donate   } from './components/donate/Donate';
import { Counter  } from './components/counter/Counter';
import { Comments } from './components/comment/Comments';
import { Comment  } from './components/comment/Comment';

// Actions
import { addAmount } from './actions/amountActions';

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
              <Comments commentsList={this.props.commentsApp.comments}></Comments>
            </div>
          </main>
          </div>
      </div>
    );
  }
}

/**
 * 
 * @param {*} state 
 */
const mapStateToProps = (state) => {
  return {
    amountApp: state.amount,
    commentsApp: state.comments
  }
}

/**
 * 
 * @param {*} dispatch 
 */
const mapDispatchToProps = (dispatch) => {
  return {
    addAmount: (quantity) => {
      dispatch(addAmount(quantity))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
