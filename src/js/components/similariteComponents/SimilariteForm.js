import React from "react"
import classnames from "classnames";


var similarite = require("./SimilariteAlgo.js");

export default class SimilariteForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {x: null,
                  y: null,
                  j: '',
                  lenx: null,
                  leny: null,
                  spanStyle: false
                };
    this.handleXChange = this.handleXChange.bind(this);
    this.handleYChange = this.handleYChange.bind(this);
  }


  handleXChange(e){
    this.setState({
      x: e.target.value,
      lenx : e.target.value.length
    });
    if(e.target.value.length === this.state.leny){
      console.log("True");
      this.setState({spanStyle : true});
    }else{
      this.setState({spanStyle : false});
    }
  }

  handleYChange(e){
      this.setState({
        y: e.target.value,
        leny: e.target.value.length
    });
    if(e.target.value.length === this.state.lenx){
      console.log("True");
      this.setState({spanStyle : true});
    }else{
      this.setState({spanStyle : false});
    }
  }



  handleSubmit(e){
    e.preventDefault();
    var x = this.state.x.trim();
    var y = this.state.y.trim();

    if(!x || !y){
        console.log("ERRRRR");
        return;
    }

    var j = similarite.calcSililarite(x, y);

    this.setState({j: j});

    this.props.onSimilariteSubmit({
      x: x,
      y: y,
      j: j,
    });
    this.setState({
      x: null,
      y: null,
      r: '',
      lenx : null,
      leny: null
    });
  }


  render (){
    return (
      <div className="input-field col s6">

          <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="row">
                <div className="input-field col s10">
                  <input
                    type="text"
                    placeholder="01011101011"
                    value={this.state.x}
                    onChange={this.handleXChange}
                  />
                </div>
                <div className="input-field col s2">
                  <span className={classnames('red accent-4', { 'green accent-4': this.state.spanStyle })}>{this.state.lenx}</span>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s10">
                    <input
                      type="text"
                      placeholder="0101110110"
                      value={this.state.y}
                      onChange={this.handleYChange}
                    />
                </div>
                <div className="input-field col s2">
                    <span className={classnames('red accent-4', { 'green accent-4': this.state.spanStyle })}>{this.state.leny}</span>
                </div>
            </div>
              <input class="btn waves-effect waves-light" type="submit" name="action" value="Calcule" />
        </form>
      </div>
    );
  }
}
