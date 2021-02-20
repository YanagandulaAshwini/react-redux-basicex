import React from 'react'
import AddCountries from './AddCountries'
import {useSelector} from 'react-redux';
export default function ShowCountries(){
    //const countries=['india','usa'];
    //store.getState()
    const countries=useSelector((state)=>state)
    return(
        <div style={{'paddingLeft':'5px'}}>
            <AddCountries/>
            <div>
                {
                    countries.map(country=><tr><td>{country}</td></tr>)
                }
            </div>
        </div>
    )
}