import React, {useState, useEffect, render} from 'react';
import db from '../firebaseConfig'

const Details_product = (props) =>{

    const [details, setDetails] = useState({})

    const productId = props.match.params.id

    const fetchProductDetails = async () =>{
        const productRes = await db.collection('TestProducts').doc(productId).get()
        const productData = productRes.data()
        setDetails(productData)
       console.log(productData)
    }

    useEffect(()=>{
        fetchProductDetails()
    },[])
    
    return (
        <div>
        <h2 className="Product_name">{details.name}</h2>
            <img src={details.imgLink} />
            <p>Description: {details.description}</p>
            {/* <div>Available Stock Number: {stockNum}</div> */}
            <div>Price: {details.price}TL</div>
            {/* <button onClick={handleOnLike}>like</button><div>Likes: {likesNumber}</div>
            <button onClick={handleOnAdd}>Add to Cart</button> */}
        </div>
    )
}

export default Details_product;