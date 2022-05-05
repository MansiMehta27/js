import React, { useState } from 'react';

function Countryfun(props) {
    const[Country,setCountry]=useState('india')
    const[gdp,setgdp]=useState(0)

    const ChangeCountry=()=>{
        setCountry('uk')
    }
    
    return (
        <div>
                    <p>Country:[function baseed component]:{Country} </p>
                    <button onClick={()=>ChangeCountry()}>Change</button>

                    <p>gdp:{gdp}</p>
                    <button onClick={()=>setgdp(5.5)}>Change GDP</button>
        </div>
    );
}

export default Countryfun;