import React from "react"


export default class Similarite extends React.Component {
  render (){
    return (
      <tr>
        <td>{this.props.x}</td>
        <td>{this.props.y}</td>
        <td>{this.props.j}</td>
      </tr>
    );
  }
}
