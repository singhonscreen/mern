import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {  Route, Switch } from "react-router-dom"
import Navbar from "./Navbar";
import Datatable from "./Datatable";
import './App.css';
import CountryFilter from "./component/CountryFilter";
import About from "./component/About";

function App() {
  return (
    <div className="container ms-auto">
      
         <Navbar />
         <Switch>
        <Route exact path="/" >
          {/* <Datatable /> */}
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/country">
        {/* <CountryFilter /> */}
        </Route>
        </Switch>
      
     
    </div>
  );
}

export default App;
