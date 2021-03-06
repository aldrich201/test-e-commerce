import React, { Component, Fragment } from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import { ProductConsumer } from '../../context';
import CartList from './CartList';
import CartTotal from './CartTotal';

export default class Cart extends Component {
	render() {
		return (
			<section>
				<ProductConsumer>
					{(value) => {
						const { cart } = value;

						if (cart.length) {
							return (
								<Fragment>
									<Title name="your" title="cart" />
									<CartColumns />
									<CartList value={value} />
									<CartTotal value={value} history={this.props.history} />
								</Fragment>
							);
						}

						return <EmptyCart />;
					}}
				</ProductConsumer>
			</section>
		);
	}
}
