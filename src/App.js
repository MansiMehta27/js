import logo from './logo.svg';
import './App.css';
import Country from './Container/Country/Country';
import City from './Container/Country/City';
import Countryfun from './Container/Country/Countryfun';
import Cityfun from './Container/Country/Cityfun';

function App() {

  return (
    <>
      {/* <Country />
      <City /> */}
      <Countryfun gdpval={8.9}/>
      {/* <Cityfun/> */}
    </>
  );
}

export default App;

