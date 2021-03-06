import * as actionTypes from './actionsTypes';

import axios from '../../axios-orders';


export const addIngredient = (name)=>({
    type: actionTypes.ADD_INGREDIENT,
    ingredientName: name
});

export const removeIngredient = (name)=>({
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName: name
})

const setIngredients = (ingredients) =>{
    return {
        type:actionTypes.SET_INGREDIENTS,
        ingredients:ingredients
    };
}

export const initIngredients= () =>{
    return dispatch =>{
        axios.get( '/ingredients.json' )
        .then( response => {
            dispatch(setIngredients(response.data));
        } )
        .catch( error => {
            dispatch(fetchIngredientFailed());
        } );
    }
}

export const fetchIngredientFailed = () =>{
    return {
        type:actionTypes.FETCH_INGREDIENT_FAILED
    }
}