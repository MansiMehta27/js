
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import About from "./Componets/About";
import Doctors from "./Componets/Doctors/Doctors";
import Department from "./Compont/Department/Department";
import Footer from "./Compont/Footer/Footer";
import Header from "./Compont/Header/Header";
import Contect from "./Containers/Contect/Contect";
import Home from "./Containers/Home/Home";




function App() {
  return (
    <>
           <Header/>
             <Switch>
              <Route exact path={"/"} component={Home}/> 
              <Route exact path={"/department"} component={Department}/>
              <Route exact path={"/doctors"} component={Doctors}/>
              <Route exact path={"/about"} component={About}/>
              <Route exact path={"/contect"} component={Contect}/>
              </Switch> 
           <Footer/>
    </>
  );
}

export default App;