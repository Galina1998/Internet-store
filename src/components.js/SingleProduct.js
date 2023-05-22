import { useEffect, useState } from "react";
import{useParams} from "react-router-dom/cjs/react-router-dom.min"

function SingleProduct(){
    let { productId } = useParams();
    const[product,setProduct]=useState({});
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/'+ productId)
            .then(res=>res.json())
            .then(data=>setProduct(data))
    },[productId])
return < div className="col-sm-6 product ">

<div className="text-center">
<img src={product.image}/>
</div>
<h3>{product.category}</h3>
<p>{product.title}</p>
<h2 className="text-danger"><i>{product.price}$</i></h2>
</div>

}

export default SingleProduct;