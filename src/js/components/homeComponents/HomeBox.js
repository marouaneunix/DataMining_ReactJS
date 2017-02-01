import React from "react"
import {Link} from "react-router";
import Card from './Card'
import img from "./../../../public/img/data_mining.jpg"

/*
<Card
    titleCard="Card Title"
    text="I am a very simple card. I am good at containing small bits of information.
    I am convenient because I require little markup to use effectively."
    link="tp3"
/>
*/

export default class HomeBox extends React.Component {
  render (){
      return (
        <div className="Header">
          <div className="row">
               <Card
                  titleCard="Distance"
                  text="En mathématiques, une distance est une application qui formalise
                   l'idée intuitive de distance, c'est-à-dire la longueur qui sépare deux points."
                  link="tp1"
              />
               <Card
                  titleCard="Similarité"
                  text="une mesure de similarité (aussi appelée une mesure de distance entre mots)
                  est une métrique qui mesure la distance (l'inverse de la similarité) entre deux chaînes de caractères."
                  link="tp2"
              />

              <Card
                 titleCard="Corrélation"
                 text="En probabilités et en statistiques, étudier la corrélation entre deux ou
                plusieurs variables aléatoires ou statistiques numériques,
                c’est étudier l'intensité de la liaison qui peut exister entre ces variables."
                 link="tp4"
              />
          </div>
        </div>
      );
  }
}
