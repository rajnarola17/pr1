import React, { useState } from 'react';

function CountryFun(props) {
    const [countryname,setchangeCountry]=useState('india');
    const changename=()=>{
        setchangeCountry('us');
    }
    return (
        <div>
            <h6>with function</h6>
            <h1>{countryname}</h1>
            <button onClick={()=>changename()}> Change name</button>
        </div>
    );
}

export default CountryFun;