
import React, { useEffect, useState } from "react";

function Total({products}){
const[total,setTotal]=useState(`0`);
useEffect(()=>{
    setTotal(products.reduce((acc,product)=>{
        return acc+ product.price*product.count
    },0).toFixed(2))
},[products])
return <h1> Total:{total} $</h1>
}
export default Total;