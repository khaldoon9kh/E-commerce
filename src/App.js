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
//import { AuthProvider } from "./Auth";
import {CartContext} from './product';
import About from './about.js'


function App() {
  const [cart, setCart] = React.useState([]);

  return (
    // <AuthProvider>
      // {/* <CartContext.Provider value={{
      //   items: cart,
      //   addItem: (item) => {
      //     setCart((oldCart) => {
      //       return [...oldCart, item];
      //     })
      //   }
      // }}> */}
    <div>
      <Nav/>
    <Router>
      <div>
        <Switch>
          <Route exact path = "/" component={Products} />
            <Route exact path="/Details_product/:id" render={(props) => <Details_product {...props} />} />
          <Route export path = "/about" component={About} />
        </Switch>
      </div>
    </Router>
   </div>
     );
   {/* </CartContext> */}
  //  </AuthProvider>

}

//  
export default App;
