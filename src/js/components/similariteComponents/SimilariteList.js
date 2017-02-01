import React from "react"
import Similarite from "./Similarite"



export default class SimilariteList extends React.Component {
  render (){
    var similariteNodes = this.props.data.map((similarite)=>{
      return (

        <Similarite
          x={similarite.x}
          y={similarite.y}
          j={similarite.j}
          key={similarite.j}
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
            <th>J</th>
          </tr>
          {similariteNodes}
          </tbody>
        </table>
      </div>
    );
  }
}
