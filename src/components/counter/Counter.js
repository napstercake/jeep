import React from 'react';

export class Counter extends React.Component {
  render() {
    return (
      <div className="counter">
        {this.props.amount}
      </div>
    );
  }
}