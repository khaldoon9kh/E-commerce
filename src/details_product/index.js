import { render } from "@testing-library/react";
import React, {useState, useEffect} from 'react';
import db from '../firebaseConfig'

const Details_product = ({match}) =>{
    console.log(match)
    const [productData, setProductData] = useState([])

    const fetchData = async ()=>{
        
        const usersRes = await db.collection('TestProducts').doc(match.).get()
        const usersData = usersRes.docs.map(user => user.data())
       setProductData(usersData)
       console.log(usersData)
    }

    return (
        <div>
        <h2 className="Product_name">productData.name</h2>
            <img src={productData.imgLink} />
            <p>Description: {productData.description}</p>
            {/* <div>Available Stock Number: {stockNum}</div> */}
            <div>Price: {productData.price}TL</div>
            {/* <button onClick={handleOnLike}>like</button><div>Likes: {likesNumber}</div>
            <button onClick={handleOnAdd}>Add to Cart</button> */}
        </div>
    )
}

export default Details_product;