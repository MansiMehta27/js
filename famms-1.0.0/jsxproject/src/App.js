import { Route } from "react-router-dom";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import Footer from "./Componet/Footer/Footer";
import Header from "./Componet/Header/Header";
import Blog from "./Container/Blog/Blog";
import Contect from "./Container/Contect/Contect";
// import About from "./Container/About/About";
import Home from "./Container/Home/Home";
import Product from "./Container/products/Product";

function App() {
  return (
    <>
              <Header/>
                <Switch>
                              <Route exact path={"/"} component={Home} />
                              {/* <Route exact path={"/about"} component={About}/> */}
                              <Route exact path={"/product"} component={Product}/>
                              <Route exact path={"/blog"}component={Blog}/>
                              <Route exact path={"/contect"}component={Contect}/>
                </Switch>   
              <Footer/>

    </>
  );
}

export default App;
