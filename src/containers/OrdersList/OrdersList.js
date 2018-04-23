import React, {Component} from 'react';
import axios from '../../axios-orders';
import Order from '../../components/Order/Order'

class OrdersList extends Component {
    state = {
        orders: [],
    };

    componentDidMount() {
        axios.get('/orders.json')
            .then(response => {
                const fetchedOrders = [];

                for (let key in response.data) {
                    fetchedOrders.push({
                        ...response.data[key],
                        id: key
                    });
                }
                this.setState({orders: fetchedOrders});
            });
    }

    render () {
        return (
            <div>
                {this.state.orders.map(order => (
                    <Order
                        key={order.id}
                        ingredients={order.ingredients}
                        price={order.price}
                    />
                ))}
            </div>
        )
    }
}

export default OrdersList;