import React, { useState } from 'react';
import Cityfun from './Cityfun';

function Countryfun({gdpval}) {
    const[Country,setCountry]=useState('india')
    const[gdp,setgdp]=useState(0)

    const ChangeCountry=()=>{
        setCountry('uk')
    }
    
    return (
        <>
                <div>
                    <p>Country:[function baseed component]:{Country} </p>
                    <button onClick={()=>ChangeCountry()}>Change</button>

                    <p>gdp:{gdp}</p>
                    <button onClick={()=>setgdp(gdpval)}>Change GDP</button>
              </div>
              <Cityfun famplc={Country}/>
        </>
       
    );
}

export default Countryfun;