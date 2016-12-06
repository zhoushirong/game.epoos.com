"use strict";
import React from "react";
import {render} from "react-dom";
import { Router, Route, browserHistory, IndexRoute} from 'react-router';
import '../../node_modules/normalize.css/normalize.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css'

import App from "./App";
import GameList from "./GameList";
import Game from "./Game";

render((
	<Router history={browserHistory}>
		<Route path="/" component={App}></Route>
    <Route path="/game" component={GameList}></Route>
  </Router>
),document.getElementById('main'));



