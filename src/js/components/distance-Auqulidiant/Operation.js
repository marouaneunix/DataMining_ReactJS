import React from "react"


export default class Operation extends React.Component {
  render (){
    return (
      <tr>
        <td>({this.props.Ax}, {this.props.Ay})</td>
        <td>({this.props.Bx}, {this.props.By})</td>
        <td>{this.props.result}</td>
      </tr>
    );
  }
}
