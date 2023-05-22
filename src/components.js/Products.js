 import React, { useEffect,useState } from "react";
 import Product from "./Product";
 import Cart from "./Cart";
 import { FormControl } from "react-bootstrap";
 function Products(){
const[products,setProducts]= useState([]);
const[filterName,setFilterName]=useState([]);
const[searchValue,setSearchValue]=useState(``);

useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(data=>setProducts(data.map(product=>{
        return {...product, addedCart:false,count:1}
    })))
},[])

function filterCategory(name){
    setSearchValue(name);
    const result=products.filter(product=> product.category.toLowerCase().includes(name))
    setFilterName(result);
}
function changeCount(id,newCount){
    const result= products.map(product=>({...product, count : product.id===id ? newCount: product.count}))
setProducts(result);
}

 function addToCart(id){
let result=[];
for(let product of products){
if(product.id===id){
   result.push({...product, addedCart:true})
}else{
    result.push(product)
}
setProducts(result)
}
 }

 function removeFromCart(id){
let result= products.map(product=>({...product,addedCart: product.id===id ? false : product.addedCart}))
setProducts(result)
 }

return <>

<FormControl
      placeholder="Search here"
      aria-label="Search here"
      className="mb-3"
      onKeyUp={e=>filterCategory(e.currentTarget.value.trim().toLocaleLowerCase())}
    
    />
<Cart products={products.filter(product=>product.addedCart)} removeFromCart={removeFromCart} changeCount={changeCount}/>
<div className="row"> 
{(searchValue? filterName: products).map(product=> <Product key={product.id} product={product} removeFromCart={removeFromCart} addToCart={addToCart}/>)}


</div>

</>
}

 export default Products;