import React from "react"
var corr = require("./CorrelationAlgo.js");

export default class CorrelationForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {x: '',
                  y: '',
                  r: '',
                  msg: '',
                };
    this.handleXChange = this.handleXChange.bind(this);
    this.handleYChange = this.handleYChange.bind(this);
  }

  handleXChange(e){
    this.setState({x: e.target.value});
  }

  handleYChange(e){
      this.setState({y: e.target.value});
  }



  handleSubmit(e){
    e.preventDefault();
    var x = this.state.x.trim();
    var y = this.state.y.trim();

    if(!x || !y){
        console.log("ERRRRR");
        return;
    }

    var cooor = corr.Correlation(x, y);
    var r = cooor.r;
    var msg = cooor.msg;

    console.log(cooor);
    this.setState({
      r: r,
      msg: msg
    });

    this.props.onCorrelationSubmit({
      x: x,
      y: y,
      r: r,
      msg: msg,
    });
    this.setState({
      x: '',
      y: '',
      r: '',
      msg: '',
    });
  }


  render (){
    return (
      <div className="input-field col s6">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            placeholder="Your Xi 2 5 6 4 .."
            value={this.state.x}
            onChange={this.handleXChange}
          />
          <input
            type="text"
            placeholder="Your Yi 5 9 6 8 .."
            value={this.state.y}
            onChange={this.handleYChange}
          />
          <input class="btn waves-effect waves-light" type="submit" name="action" value="Calcule" />
        </form>
      </div>
    );
  }
}
