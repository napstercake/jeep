import React from 'react';

export class Donate extends React.Component {
  render() {
    return (
      <button className="donate" onClick={() => this.props.add(10)}>Donate</button>
    );
  }
}