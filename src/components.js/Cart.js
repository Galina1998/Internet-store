import React from "react";
import { Badge } from "react-bootstrap";
import Total from "./Total";

function Cart({products,removeFromCart,changeCount}){
return  <>

<ul>
{products.map(product=> <li key={product.id}> {product.category}
<Badge onClick={()=> changeCount(product.id,product.count -1)} className="bg-danger text-white">-</Badge>{product.count}
<Badge onClick={()=> changeCount(product.id,product.count +1)} className="bg-success text-white">+</Badge>
<Badge onClick={()=>removeFromCart(product.id)} className="bg-danger text-white">Remove</Badge>
</li>)}
</ul>
<Total products={products}/>
</>
}
export default Cart;