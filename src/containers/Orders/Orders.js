import React, { Component } from 'react';
import {connect} from 'react-redux';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actiontypes  from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';

class Orders extends Component {

    componentDidMount() {
        this.props.onFetchOrders()
    }

    render () {
        let result
        if(this.props.orders.length > 0){
            result = this.props.orders.map(order => (
                <Order 
                    key={order.id}
                    ingredients={order.ingredients}
                    price={order.price} />
            ))
        } else if(this.props.error){
            result = <h1>Unable to Get Previous Orders</h1>
        } else if(this.props.loading){
            result = <Spinner />
        }
        return (
            <div>
                {result}
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        orders: state.orders.orders,
        loading:state.orders.loading,
        error :state.orders.error
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders : () => dispatch(actiontypes.fetchOrders())
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(Orders, axios));