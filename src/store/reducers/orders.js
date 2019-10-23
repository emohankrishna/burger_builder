import * as actionTypes from '../actions/actionsTypes';
const initialState = {
    orders:[],
    loading:false,
    purchased:false,
    error:null
}

const orderReducer = (state=initialState,action) =>{
    switch(action.type){
        case  actionTypes.PURCHASE_BURGER_START:
                return {
                    ...state,
                    loading:true,
                    purchased:false
                }
        case  actionTypes.PURCHASE_BURGER_SUCCESS:
            const new_order ={
                ...action.orderData,
                id:action.orderId
            }
            return {
               ...state,
               loading:false,
               orders:state.orders.concat(new_order),
               purchased:true 
            }
        case  actionTypes.PURCHASE_BURGER_FAILED:
                return {
                    ...state,
                    loading:false,
                    purchased:false
                }
        case  actionTypes.PURCHASE_INT:
                return {
                    ...state,
                    loading:false,
                    purchased:false
                }
        case actionTypes.FETCH_ORDERS_START:
                return{
                    ...state,
                    loading:true,
                    error:null
                }
        case  actionTypes.FETCH_ORDERS:
                return {
                    ...state,
                    loading:false,
                    orders:[...action.orders]
                }
        case  actionTypes.FETCH_ORDERS_FAILED:
                return {
                    ...state,
                    loading:false,
                    error : action.error
                }
        default :
            return state
    }

}

export default orderReducer