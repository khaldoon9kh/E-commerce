import '@fortawesome/fontawesome-free/css/all.min.css'; import
'bootstrap-css-only/css/bootstrap.min.css'; import
'mdbreact/dist/css/mdb.css';
import React, {useState, useEffect} from 'react';
import db from '../firebaseConfig'
import Product from '../product'

// const fakeData=[{
//     name:"TV",
//     imgLink: "dfsdf",
//     description:"dfgdffg",
//     stockNamber:15,
//     likes: 0
// },{
//     name:"Pizza",
//     imgLink: "dfsdf",
//     description:"dfgdffg",
//     stockNamber:15,
//     likes: 0
// }]

const Products = () => {
    const [productData, setProductData] = useState([])
    const fetchData = async ()=>{
        const usersRes = await db.collection('TestProducts').get();
        const usersData = usersRes.docs.map(user => user.data())
       setProductData(usersData)
       console.log(usersData)
    }

    useEffect(()=>{
        fetchData()
    },[])

    return (productData.map(product=> <div>
        <Product {...product} />
        </div>))
}
export default Products