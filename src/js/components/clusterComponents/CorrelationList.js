import React from "react"
import Correlation from "./Correlation"



export default class CorrelationList extends React.Component {
  render (){
    var correlationNodes = this.props.data.map((correlation)=>{
      return (

        <Correlation
          x={correlation.x}
          y={correlation.y}
          r={correlation.r}
          msg={correlation.msg}
          key={correlation.r}
        />
      );
    });

    return (
      <div className="col s6">
        <table className="bordered">
          <tbody>
          <tr>
            <th>X</th>
            <th>Y</th>
            <th>R</th>
            <th>Message</th>
          </tr>
          {correlationNodes}
          </tbody>
        </table>
      </div>
    );
  }
}
