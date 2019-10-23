import * as actionTypes from './actionsTypes';
import axios from '../../axios-orders';

const purchaseBurgerSuccess = (id,orderData) =>{
    return {
        type : actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId : id,
        orderData : orderData
    };
};

const purchaseBurgerFailed = (error) =>{
    return {
        type : actionTypes.PURCHASE_BURGER_FAILED,
        error : error
    };
};

export const purchaseBurgerStart = () =>{
    return {
        type:actionTypes.PURCHASE_BURGER_START
    };
};
export const purchaseBurger = (orderData) =>{
    return dispatch =>{
        dispatch(purchaseBurgerStart())
        axios.post( '/orders.json', orderData )
            .then( response => {
                console.log("Ordered purchased ",response)
                dispatch(purchaseBurgerSuccess(response.data.name,orderData));
            } )
            .catch( error => {
                dispatch(purchaseBurgerFailed(error));
            } );
    };
};

export const initPurchase = () =>{
    return {
        type:actionTypes.PURCHASE_INT
    };
};

export const fetchOrdersStart = () =>{
    return {
        type:actionTypes.FETCH_ORDERS_START
    };
};

export const fetchOrders = () => {
    return dispatch =>{
        dispatch(fetchOrdersStart())
        axios.get('/orders.json')
            .then(res => {
                const fetchedOrders = [];
                for (let key in res.data) {
                    fetchedOrders.push({
                        ...res.data[key],
                        id: key
                    });
                }
                dispatch(fetchedOrdersSuccess(fetchedOrders));
            })
            .catch(err => {
                dispatch(fetchedOrdersFailed(err));
            });
    };
};

export const fetchedOrdersSuccess = (ordersDetails) => {
    return {
        type:actionTypes.FETCH_ORDERS,
        orders:ordersDetails
    };
};

export const fetchedOrdersFailed = (error) => {
    return {
        type:actionTypes.FETCH_ORDERS_FAILED,
        error : error
    };
};