import {ADD_COUNTRY} from "../action/actionType";
//import React from 'react'
const countryReducer = (state=[],action)=>{
    switch(action.type){
        case ADD_COUNTRY:
            return[...state,action.country]
        default:
            return state;
    }
}
export default countryReducer;