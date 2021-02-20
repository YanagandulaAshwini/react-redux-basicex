import {ADD_COUNTRY} from './actionType';
//import React from 'react'
const addCountry=(data)=>{
    return{
        type:ADD_COUNTRY,
        country:data  //payload
}
}
export default addCountry;