import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart/Cart';
import Default from './components/Default';
import Modal from './components/Modal';

class App extends React.Component {
	render() {
		return (
			<Fragment>
				<Navbar />
				<Switch>
					<Route path="/" exact component={ProductList} />
					<Route path="/details" component={Details} />
					<Route path="/cart" component={Cart} />
					<Route component={Default} />
				</Switch>
				<Modal />
			</Fragment>
		);
	}
}

export default App;
