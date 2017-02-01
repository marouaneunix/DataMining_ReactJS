import React from "react"
import Footer from "./footerComponents/Footer"
import Header from "./headerComponents/Header"


export default class Layout extends React.Component {
  render (){
      return (
        <div className="Layout">
          <Header />
            <div className="content">
              {this.props.children}
            </div>
          <Footer />
        </div>
      );
  }
}
