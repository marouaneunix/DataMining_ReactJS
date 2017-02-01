import React from "react"


export default class Correlation extends React.Component {
  render (){
    return (
      <tr>
        <td>{this.props.x}</td>
        <td>{this.props.y}</td>
        <td>{this.props.r}</td>
        <td>{this.props.msg}</td>
      </tr>
    );
  }
}
