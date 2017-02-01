import React from "react"

export default class OperationForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {Ax: '',
                  Ay: '',
                  Bx: '',
                  By: '',
                  result: '',
                };
    this.handleAxChange = this.handleAxChange.bind(this);
    this.handleAyChange = this.handleAyChange.bind(this);
    this.handleBxChange = this.handleBxChange.bind(this);
    this.handleByChange = this.handleByChange.bind(this);

  }

  handleAxChange(e){
    this.setState({Ax: e.target.value});
  }

  handleAyChange(e){
      this.setState({Ay: e.target.value});
  }

  handleBxChange(e){
    this.setState({Bx: e.target.value});
  }
  handleByChange(e){
    this.setState({By: e.target.value});
  }


  handleSubmit(e){
    e.preventDefault();
    var Ax = Number.parseFloat(this.state.Ax.trim());
    var Ay = Number.parseFloat(this.state.Ay.trim());
    var Bx = Number.parseFloat(this.state.Bx.trim());
    var By = Number.parseFloat(this.state.By.trim());
    if(!Ax || !Ay || !Bx || !By){
        console.log("ERRRRR");
        return;
    }
    var result =  Math.sqrt(Math.pow((Ax-Bx),2) + Math.pow((Ay-By),2));
    console.log(result);
    this.setState({result: result});

    this.props.onOperationSubmit({
      Ax: Ax,
      Ay: Ay,
      Bx: Bx,
      By: By,
      result: result,
    });
    this.setState({
      Ax: '',
      Ay: '',
      Bx: '',
      By: '',
    });
  }


  render (){
    return (
      <div className="input-field col s6">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            placeholder="Your Ax"
            value={this.state.Ax}
            onChange={this.handleAxChange}
          />
          <input
            type="text"
            placeholder="Your Ay"
            value={this.state.Ay}
            onChange={this.handleAyChange}
          />
          <input
            type="text"
            placeholder="Your Bx"
            value={this.state.Bx}
            onChange={this.handleBxChange}
          />
          <input
            type="text"
            placeholder="Your By"
            value={this.state.By}
            onChange={this.handleByChange}
          />
          <input class="btn waves-effect waves-light" type="submit" name="action" value="Calcule" />
        </form>
      </div>
    );
  }
}
