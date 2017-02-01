import React from 'react';
import {Link} from 'react-router';



class Card extends React.Component{
  render(){
    return(
      <div className="col s12 m4">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">{this.props.titleCard}</span>
            <p>{this.props.text}</p>
          </div>
          <div className="card-action">
            <Link to={this.props.link}>Voire l'exemple</Link>
          </div>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  titleCard: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired,
  link: React.PropTypes.string.isRequired,
}


export default Card;
