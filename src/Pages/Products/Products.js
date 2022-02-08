import React from 'react'
import { commerce } from './../../lib/commerce'
import { useEffect, useState } from 'react';
import {Box,Typography} from '@mui/material';
import Product from './Product';


const Products = () => {
    const [products,setProducts]   = useState([]);
    const fetchProducts = async() => {
        const {data} = await commerce.products.list();
        setProducts(data)
       }
    useEffect(()=> {
        fetchProducts()
                    
     
    },[])

    return (
        
        
        <Box sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent : 'space-around'
        }}
        mt={10}
        >
        
                   {
                       products.map((product)=><Product key={product.id} product={product}/> )
                    }
                   
        </Box>
                   
    )   
}

export default Products
