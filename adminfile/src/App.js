import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Layout from "./Component/Layout/Layout";
import Doctor from "./Container/Doctors/Doctor";
import Medisin from "./Container/Medicin/Medisin";

function App() {
  return (
    <>
            <Layout>
                          <Switch>
                                        <Route exact path={"/medisin"} component={Medisin}/>
                                        <Route exact path={"/doctors"}component={Doctor}/>
                          </Switch>
            </Layout>
    </>
  
  );
}

export default App;
