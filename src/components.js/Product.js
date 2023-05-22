 import { Button } from "react-bootstrap";
import React from "react"
import {Link} from "react-router-dom/cjs/react-router-dom.min"

 function Product({product,addToCart,removeFromCart}){
return<div className="col-sm-6 col-md-4 col-lg-3 p-4 pt-5  product text-center">
   
<div className="card_img">
<img className="img" src={product.image}/>
</div>
<div className="description mt-4">
<h3><Link to={`/product/${product.id}`}>{product.category}</Link></h3>
<p>{product.title}</p>

</div>
<div className="price mb-5">
<h2 className="text-danger"><i>{product.price}$</i></h2>
</div>
{product.addedCart ? <Button onClick={()=> removeFromCart(product.id)} variant="danger">Remove from cart</Button> :
<Button onClick={()=> addToCart (product.id)} variant="success"> Add to cart </Button> }

</div>
 }

 export default Product;