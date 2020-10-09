import React from "react";
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBTooltip, MDBCardFooter, MDBBtn, MDBIcon} from "mdbreact";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

const Product = (props) => {
  const [stockNum, setStokNum] = React.useState(props.stockNamber)
  const [likesNumber, setlikesNum] = React.useState(props.likes)

  const handleOnLike=()=>{
    setlikesNum(likesNumber + 1)
  }

  const handleOnAdd=()=>{
    setStokNum(stockNum-1)
  }
  
  const handlePicClick=()=>{
  }
  console.log(props)
  return (
    // <Link to ={{pathname:`/${props.name}`}} >
    <MDBCard className="m-2" style={{ width: "22rem" }} cascade ecommerce narrow>
      <MDBCardImage cascade top src={props.imgLink} waves onClick={handlePicClick} />
      <MDBCardBody cascade className="text-center">
        <MDBCardTitle>
          <Link to={`/Details_product/${props.name}`}> {props.name}</Link>
          <strong>{props.name}</strong>
          
        </MDBCardTitle>
        <MDBCardText>
        {props.description}
        Likes: {likesNumber}
        Stock Number:{stockNum}
        </MDBCardText>
        <MDBCardFooter>
          <span className="float-left">{props.price}$</span>
          <span className="float-right">
            <MDBTooltip placement="top">
              <MDBBtn tag="a" href="https://mdbootstrap.com" target="_blank" color="transparent" size="lg" className="p-1 m-0 mr-2 z-depth-0" >
                  <MDBIcon icon="eye"/>
              </MDBBtn>
              <div>Quick Look</div>
            </MDBTooltip>
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
    //</Link>
  );
}

export default Product

/*
img of the product
Name of the product
Description of the product
A state that indicates the amount of this item in stock
A state that indicates the number of likes the product's got
A button to like the product with an event listener to change the state of the products (liked or not)
A button to add the product to cart with an event listener to change the state of the products in stock according to how many items the user ordered*/

// const Product = (props) => {
//   const [stockNum, setStokNum] = React.useState(props.stockNamber)
//   const [likesNumber, setlikesNum] = React.useState(props.likes)

//   const handleOnLike=()=>{
//     setlikesNum(likesNumber + 1)
//   }

//   const handleOnAdd=()=>{
//     setStokNum(stockNum-1)
//   }

  
//     return (
//         <div className="product">
//         <h2>Product Name:{props.name}</h2>
//         <img src={props.imgLink} />
//         <p>Description: {props.description}</p>
//         <div>Available Stock Number: {stockNum}</div>
//         <div>Price: {props.price}TL</div>
//         <button onClick={handleOnLike}>like</button><div>Likes: {likesNumber}</div>
//         <button onClick={handleOnAdd}>Add to Cart</button>
//         </div>
//     )
// }

// export default Product
