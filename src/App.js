import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Dashboard from './components/Dashboard';
import NoMatch from './components/NoMatch';
import Nav from './components/Nav';
import Add from './components/Add';
import Subtract from './components/Subtract';
import Multiply from './components/Multiply';
import Divide from './components/Divide';

function App() {
	return (
		<Router>
			<div>
				<Nav />
				<Switch>
					<Route exact path='/' component={Dashboard} />
					<Route exact path='/dashboard' component={Dashboard} />
					<Route exact path='/add' component={Add} />
					<Route exact path='/subtract' component={Subtract} />
					<Route exact path='/multiply' component={Multiply} />
					<Route exact path='/divide' component={Divide} />
					<Route component={NoMatch} />
				</Switch>
			</div>
		</Router>
	);
}
export default App;

// Setting this.state.images to the images json array
