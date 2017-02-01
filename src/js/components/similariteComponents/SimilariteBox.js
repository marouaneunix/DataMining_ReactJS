import React from "react"
import SimilariteForm from "./SimilariteForm"
import SimilariteList from "./SimilariteList"


export default class SimilariteBox extends React.Component {
  constructor (props){
    super(props);
    this.state = {data : [] };
    this.loadSimilariteFromServe = this.loadSimilariteFromServe.bind(this);
    this.handleSimilariteSubmit = this.handleSimilariteSubmit.bind(this);
  }

  loadSimilariteFromServe(){
    this.setState({data: []});
}

  componentDidMount(){
    this.loadSimilariteFromServe();
    //setInterval(this.loadCorrelationFromServe, 2000)
  }

  handleSimilariteSubmit(similarite){
    //TODO : submit to the server and refresh the page
    var similarites = this.state.data;
    var newSimilarites = similarites.concat([similarite]);
    this.setState({data: newSimilarites});
  }


  render (){

    return (
      <div className="commentBox">
        <div className="row">
          <SimilariteForm onSimilariteSubmit={this.handleSimilariteSubmit} />
          <SimilariteList data={this.state.data} />
        </div>
      </div>
    );
  }
}
