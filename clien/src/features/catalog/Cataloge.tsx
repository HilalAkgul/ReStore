
import { useEffect, useState } from 'react';
import {Button } from "@mui/material";
import { Product } from "../../app/models/product"; 
import ProductList from "./ProductList";




export default function Cataloge(){
      const [products,setProduct]= useState<Product[]>([]);

      useEffect(() => {
        fetch('https://localhost:7239/api/products')
        .then(x=>x.json())
        .then(data=>setProduct(data))
      }, [])
  
      function addProduct(){
  
  setProduct(prevState=>[...prevState,{name:"product"+(prevState.length+1),price:(prevState.length*1000),
  id:prevState.length,description:"desc",brand:"brand",pictureUrl:"https://picsum.photos/2"
  }]);
  
  
      }
  
return(
<>

<ProductList products={products}/>
      <Button variant='contained' >Add Product</Button>
</>


);


}