import logo from './logo.svg';
import './App.css';
import Country from './Container/Country/Country';
import City from './Container/Country/City';
import Countryfun from './Container/Country/Countryfun';
import Cityfun from './Container/Country/Cityfun';
import Branch from './Container/Country/Branch';
import Time from './Container/Country/Time/Time';
import Timefun from './Container/Country/Time/Timefun';

{/* <City/> */}
{/* <Country/> */}
{/* <Countryfun/> */}
  //  <Cityfun/>
  // <Branch/>
  // <Time/>
  // <Timefun/>

import React, { useEffect, useState } from 'react';
import Home from './Container/Country/Home/Home';
import Loading from './Componets/Loading/Loading';
import Course from './Container/Country/Course';
const HomeWithLoding=Loading(Home)

function App() {
   const [loading, setloading]=useState(false);
   const[data,setData]=useState([]);

   let orgDate=[
        {id:101,name:"Binal"},
        
        {id:102,name:"Neha"},

        {id:103,name:"priya"}
        
   ]
    
      useEffect(
            ()=>{
              setloading(true);
              setTimeout(()=>{setloading(false);setData(orgDate)},2000)
            },
      [])
       console.log(loading,data);
  return (
    <div>
            <>
                    <HomeWithLoding
                      isLoading={loading}
                      data={data}/>
            </>
    </div>
  );
}
    
export default App;

