import React from "react"
var Markdown = require('react-remarkable');

export default class Comment extends React.Component {
  render (){
    return (
      <div className="comment">
          <h3 className="commentAuthor">
            {this.props.author}
          </h3>
          <Markdown>{this.props.children}</Markdown>
      </div>
    );
  }
}
