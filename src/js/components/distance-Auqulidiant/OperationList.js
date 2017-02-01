import React from "react"
import Operation from "./Operation"



export default class OperationList extends React.Component {
  render (){
    var operationNodes = this.props.data.map((operation)=>{
      return (

        <Operation Ax={operation.Ax}
          Ay={operation.Ay}
          Bx={operation.Bx}
          By={operation.By}
          result={operation.result}
          key={operation.result}
        />
      );
    });

    return (
      <div className="col s6">
        <table className="bordered">
          <tbody>
          <tr>
            <th>A</th>
            <th>B</th>
            <th>Resultat</th>
          </tr>
          {operationNodes}
          </tbody>
        </table>
      </div>
    );
  }
}
