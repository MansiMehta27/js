import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Footer from "./Componet/Footer/Footer";
import Header from "./Componet/Header/Header";
import About from "./Container/About/About";
import Auth from "./Container/Auth/Auth";
import Contect from "./Container/Contect/Contect";
import Home from "./Container/Home/Home";
import Project from "./Container/Project/Project";
import Service from "./Container/Service/Service";


function App() {
  return (
          <>
                  <Header/>
                                <Switch>
                                        <Route exact path={"/"} component={Home}/>
                                        <Route exact path={"/about"} component={About}/>
                                        <Route exact path={"/service"}component={Service}/>
                                        <Route exact path={"/project"}component={Project}/>
                                        <Route exact path={"/contect"}component={Contect}/>
                                        <Route exact path={"/auth"}component={Auth}/>
                                </Switch>
                  <Footer/>
          </>
  );
}

export default App;
