import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Footer from "./Componet/Footer/Footer";
import Header from "./Componet/Header/Header";
import Department from "./Container/Department/Department";
import Doctor from "./Container/Doctors/Doctor";
import Home from "./Container/Home/Home";
import Login from "./Container/Login/Login";

import Medisin from "./Container/Medisin/Medisin";

function App() {
  return (
            <>
                  <Header/>
                                  <Switch>

                                       <Route exact path={"/"}component={Home}/>
                                       <Route exact path={"/department"}component={Department}/>
                                       <Route exact path={"/Doctors"}component={Doctor}/>
                                       <Route exact path={"/Login"} component={Login}/>
                                       
                                       <Route exact path={"/medisin"}component={Medisin}/>
                                 </Switch>
                  <Footer/>


            </>
  );
}

export default App;
