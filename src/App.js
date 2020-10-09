import React from 'react';
import Products from './products';
//import Product from '.product';
import Details_product from "./details_product"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <Switch>
      <Route exact path = "/" component={Products} />
      <Route exact path = "/Details_product/:id" component={Details_product}/>
      </Switch>
      </div>
        
    </Router>
    // <div className="container">
    //   <Products />
      // {/* <Details_product /> */}
   // </div>
  );
}

export default App;
