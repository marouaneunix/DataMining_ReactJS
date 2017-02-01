import React from "react"
import CommentList from "./CommentList"
import CommentForm from "./CommentForm"

export default class CommentBox extends React.Component {
  constructor (props){
    super(props);
    this
    this.state = {data : [] };
    this.loadCommentFromServe = this.loadCommentFromServe.bind(this);
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
  }

  loadCommentFromServe(){
    this.setState({data: [
      {id: 1, author: "Pete Hunt", text: "This is one comment"},
      {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
    ]
  })
}

  componentDidMount(){
    this.loadCommentFromServe();
    setInterval(this.loadCommentFromServe, 2000)
  }

  handleCommentSubmit(comment){
    //TODO : submit to the server and refresh the page
    var comments = this.state.data;
    comment.id = Date.now();
    var newComments = comments.concat([comment]);
    this.setState({data: newComments});
  }


  render (){


    return (
      <div className="commentBox">
        <h2>Comments</h2>
        <CommentList data={this.state.data} />
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
      </div>
    );
  }
}
