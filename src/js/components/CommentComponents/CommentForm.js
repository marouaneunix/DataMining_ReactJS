import React from "react"

export default class CommentForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {author: '', text: ''};
    this.handleAuthorCahnge = this.handleAuthorCahnge.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);

  }

  handleAuthorCahnge(e){
    this.setState({author: e.target.value});
  }

  handleTextChange(e){
    this.setState({text: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    var author = this.state.author.trim();
    var text = this.state.text.trim();
    if(!text || !author){
        console.log("ERRRRR");
        return;
    }
    this.props.onCommentSubmit({author: author, text: text});
    this.setState({author: '', text: ''});
  }


  render (){
    return (
      <div className="commentForm">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            placeholder="Your name"
            value={this.state.author}
            onChange={this.handleAuthorCahnge}
          />
          <input
            type="text"
            placeholder="Say somthing..."
            value={this.state.text}
            onChange={this.handleTextChange}
          />
          <input type="submit" value="Post" />
        </form>
      </div>
    );
  }
}
