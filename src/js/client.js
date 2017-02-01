import React from "react"
import ReactDOM from "react-dom"
import Layout from "./components/Layout"
import OperationBox from "./components/distance-Auqulidiant/OperationBox"
import CommentBox from "./components/CommentComponents/CommentBox"
import CorrelationBox from "./components/correlationComponents/CorrelationBox"
import HomeBox from "./components/homeComponents/HomeBox"
import SimilariteBox from "./components/similariteComponents/SimilariteBox"

import {Router, Route, IndexRoute, hashHistory} from "react-router"

//import Style
import styles from "./../public/css/materialize.css"
import style from "./../public/css/custom.css"

const app = document.getElementById('app')

ReactDOM.render(<Layout />, app);

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={HomeBox}></IndexRoute>
      <Route path="tp1" component={OperationBox}></Route>
      <Route path="tp4" component={CorrelationBox}></Route>
      <Route path="tp2" component={SimilariteBox}></Route>
      <Route path="comment" component={CommentBox}></Route>
    </Route>
  </Router>

  ,app)
