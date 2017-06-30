import React from 'react';

import { Comment } from './Comment';

export class Comments extends React.Component {
  render() {
    return (
      <div className="comments">
        { this.props.commentsList.map((asd, id) =>
          <Comment cmt={asd}></Comment>
        ) }
      </div>
    );
  }
}