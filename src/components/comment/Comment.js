import React from 'react';

export class Comment extends React.Component {
  render() {
    return (
      <div className="comment">
        { this.props.cmt }
      </div>
    );
  }
}