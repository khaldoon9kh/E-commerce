import React from "react";
import { MDBCol, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBTooltip, MDBCardFooter, MDBBtn, MDBIcon} from "mdbreact";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  render
} from "react-router-dom";

// export const CartContext = React.createContext();

const Product = (props) => {
  // const cartContextValue = React.useContext(CartContext);
  console.log(props)
  const [stockNum, setStokNum] = React.useState(props.stockNamber)
  const [likesNumber, setlikesNum] = React.useState(props.likes)

  const handleOnLike=()=>{
    setlikesNum(likesNumber + 1)
  }

  const handleOnAdd=()=>{
    setStokNum(stockNum-1)
    //cartContextValue.addItem({});
  }
  

  
  return (
    <MDBCol>
    <MDBCard className="m-2" style={{ width: "22rem" }} cascade ecommerce narrow>
    <Link to={`/Details_product/${props.id}`}>
      <MDBCardImage cascade top src={props.imgLink} waves />
      </Link>
      <MDBCardBody cascade className="text-center">
        <MDBCardTitle>
          <Link to={`/Details_product/${props.id}`}>{props.name}</Link>
        </MDBCardTitle>
        <MDBCardText>
        Likes: {likesNumber} 
        </MDBCardText>
        <MDBCardText>
        Stock Number:{stockNum}
        </MDBCardText>
        <MDBCardText>
        Description :  {props.description}
        </MDBCardText>
       
        <MDBCardFooter>
          <span className="float-left">{props.price}$</span>
          <span className="float-right">
            <MDBTooltip placement="top">
              <MDBBtn tag="a" color="transparent" size="lg" className="p-1 m-0 z-depth-0" onClick={handleOnLike}>
                <MDBIcon  icon="heart" className="red-text"/>
              </MDBBtn>
              <div>Added to Wishlist</div>
            </MDBTooltip>
            <MDBTooltip placement="top">
              <MDBBtn tag="a" size="lg" className="p-1 m-0 mr-2 z-depth-0" onClick={handleOnAdd}>
                  <MDBIcon icon="shopping-cart"/>
              </MDBBtn>
              <div>Add to Cart</div>
            </MDBTooltip>
          </span>
        </MDBCardFooter>
      </MDBCardBody>
    </MDBCard>
    </MDBCol>
  );
}

export default Product