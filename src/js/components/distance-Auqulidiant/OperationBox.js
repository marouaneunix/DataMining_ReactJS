import React from "react"
import OperationForm from "./OperationForm"
import OperationList from "./OperationList"


export default class OperationBox extends React.Component {
  constructor (props){
    super(props);
    this.state = {data : [] };
    this.loadOperationFromServe = this.loadOperationFromServe.bind(this);
    this.handleOperationSubmit = this.handleOperationSubmit.bind(this);
  }

  loadOperationFromServe(){
    this.setState({data: []});
}

  componentDidMount(){
    this.loadOperationFromServe();
    setInterval(this.loadCommentFromServe, 2000)
  }

  handleOperationSubmit(operation){
    //TODO : submit to the server and refresh the page
    var operations = this.state.data;
    var newOperations = operations.concat([operation]);
    this.setState({data: newOperations});
  }


  render (){


    return (
      <div className="commentBox">
        <div className="row">
          <OperationForm onOperationSubmit={this.handleOperationSubmit} />
          <OperationList data={this.state.data} />
        </div>
      </div>
    );
  }
}
