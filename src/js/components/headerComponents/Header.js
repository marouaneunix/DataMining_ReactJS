import React from "react"
import {Link} from "react-router";
import logo from "./../../../public/img/logo.png";

export default class Header extends React.Component {
  render (){
      return (
        <div className="Header">
        <nav className="blue-grey darken-2">
           <div className="nav-wrapper">

              <Link to="/" className="brand-logo">
                <img className="logo" src={logo} />
              </Link>
           </div>
         </nav>
        </div>
      );
  }
}



 /*
 <h1>Header</h1>
 <Link to="comment">Commentaire</Link>
 <Link to="/">Home</Link>
 */
