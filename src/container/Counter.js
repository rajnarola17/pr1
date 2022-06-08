import React, { useState } from 'react';

function Counter(props) {
    const[number,setNumber]=useState(0);
    const incr=()=>{setNumber(number<10 ? number + 1:number)}
    const dicr=()=>{setNumber(number===0 ? number:number - 1)}
    
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={()=>incr()}>incriment</button>
            <button onClick={()=>dicr()}>incriment</button>
        </div>
    );
}

export default Counter;