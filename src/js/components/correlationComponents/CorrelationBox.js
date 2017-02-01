import React from "react"
import CorrelationForm from "./CorrelationForm"
import CorrelationList from "./CorrelationList"


export default class CorrelationBox extends React.Component {
  constructor (props){
    super(props);
    this.state = {data : [] };
    this.loadCorrelationFromServe = this.loadCorrelationFromServe.bind(this);
    this.handleCorrelationSubmit = this.handleCorrelationSubmit.bind(this);
  }

  loadCorrelationFromServe(){
    this.setState({data: []});
}

  componentDidMount(){
    this.loadCorrelationFromServe();
    //setInterval(this.loadCorrelationFromServe, 2000)
  }

  handleCorrelationSubmit(correlation){
    //TODO : submit to the server and refresh the page
    var correlations = this.state.data;
    var newCorrelations = correlations.concat([correlation]);
    this.setState({data: newCorrelations});
  }


  render (){


    return (
      <div className="commentBox">
        <div className="row">
          <CorrelationForm onCorrelationSubmit={this.handleCorrelationSubmit} />
          <CorrelationList data={this.state.data} />
        </div>
      </div>
    );
  }
}
