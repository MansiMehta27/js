import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Layout from "./Componets/Layout/Layout";
import Doctors from "./Container/Doctors/Doctors";
import Medisin from "./Container/Medisin/Medisin";

function App() {
  return (
    <>
          <Layout>
                            <Switch>
                                          <Route exact path={"/medisin"}component={Medisin}/>
                                          <Route exact path={"/doctors"}component={Doctors}/>

                                          
                            </Switch>
          </Layout>
    </>
  );
}

export default App;
