import React, { useEffect, useState } from 'react';

function Lifecyclefun(props) {
    const [time,setTime]=useState(new Date());
    const tick=()=>{
        setTime(new Date());
    }
    
    useEffect(()=>{
        const timeI=setInterval(()=>tick(),1000);

        return()=>{
            clearInterval(timeI);
        }
    },[time]);
    return (
        <div>
            <h1>functionbase lifecycle</h1>
            <h4>{time.toLocaleTimeString()}</h4>
        </div>
    );
}

export default Lifecyclefun;