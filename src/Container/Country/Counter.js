import React, { useState } from 'react';

function Counter(props) {
    let [counter,setcounter]=useState(0);
    return (
        <div>
               <button onClick={()=>setcounter(counter > 0 ? counter -1 : counter)}>-</button>
               <span>{counter}</span>
               <button onClick={()=>setcounter(counter < 10 ? counter +1 : counter)}>+</button>
        </div>
    );
}

export default Counter;