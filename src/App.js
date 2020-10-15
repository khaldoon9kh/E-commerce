import React from 'react';
import Products from './products';
//import Product from '.product';
import Details_product from "./details_product"
import Nav from "./Nav.js"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  render
} from "react-router-dom";
import { MDBRow} from "mdbreact";



function App() {
  return (
    <div>
      <Nav/>
    <Router>
      <div>
        <Switch>
          <Route exact path = "/" component={Products} />
            <Route exact path="/Details_product/:id" render={(props) => <Details_product {...props} />} />
        </Switch>
      </div>
    </Router>
   </div>
  );
}

//  
export default App;
