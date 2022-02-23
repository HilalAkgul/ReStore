import { TableRow, Typography ,Table,TableBody,TableCell, Divider,Grid} from "@mui/material";
import axios from "axios";
import { useState,useEffect } from "react";

import { useParams } from "react-router";
import { Product } from "../../app/models/product";

export default function ProductDetails()
{
    const {id}=useParams<{id:string}>();
    const [product,setProduct]=useState<Product | null>(null);
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        axios.get(`https://localhost:7239/api/Products/${id}`)
        .then(response=>setProduct(response.data))
        .catch(x=>console.log(x))
        .finally(()=>setLoading(false));
    },[id]);

    if(loading) return <h3>Loading</h3>
    if(!product) return <h3>No Product</h3>
return(

  <Grid container spacing={6}>
<Grid item xs={6}>

    <img src={product.pictureUrl} alt={product.name} style={{width:'100%'}} ></img>
</Grid>
<Grid item xs={6}>
    <Typography variant='h3'>{product.name}</Typography>
<Divider sx= {{mb:2}} />
<Typography variant='h4' color='secondary'>${(product.price/100).toFixed(2)}</Typography>
<Table>
    <TableBody>

        <TableRow>

            <TableCell>Name</TableCell>
            <TableCell>{product.name}</TableCell>
        </TableRow>
        <TableRow>

            <TableCell>Decsription</TableCell>
            <TableCell>{product.description}</TableCell>
        </TableRow>
        <TableRow>

            <TableCell>Type</TableCell>
            <TableCell>{product.type}</TableCell>
        </TableRow>
        <TableRow>

            <TableCell>Brand</TableCell>
            <TableCell>{product.brand}</TableCell>
        </TableRow>
        <TableRow>

            <TableCell>Quantity in stock</TableCell>
            <TableCell>{product.quantityInStock}</TableCell>
        </TableRow>
    </TableBody>
    </Table>
</Grid>
      </Grid>

);



}