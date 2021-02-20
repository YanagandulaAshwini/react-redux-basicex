import React ,{useState} from 'react'
import {useDispatch} from 'react-redux';
import  addCountry from '../action/addCountry';

export default function AddCountries(){
   const [country,setCountry]=useState('');
   //const dispatch=useDispatch();
   const dispatch=useDispatch((state)=>state);
   const onSubmitHandler=()=>{
    dispatch(addCountry(country));
    setCountry('')
    }
   
   return(
        <div>
            <div className ="form-group col-md-4 offset-3">

            <input type="text" placeholder="country" onChange={(e)=>{setCountry(e.target.value)}} value={country}/>
            <button type="btn btn-success" onClick={onSubmitHandler}>Add Country</button>
            </div>
        </div>
    )
}