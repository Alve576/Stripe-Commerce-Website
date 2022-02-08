import React, { useEffect, useState } from 'react'
import { Button, CardContent, CardMedia, Grid, Paper,styled, Typography,Box} from '@mui/material';
import './style.css'
import { Facebook, Favorite, Instagram, ShoppingCart, Twitter, YouTube } from '@mui/icons-material';
import { commerce } from '../../lib/commerce';
import { Link } from 'react-router-dom';
import useAuth from './../../hooks/useAuth'



const Product = ({product}) => {
    const {id,name,image,description,price} = product;
    const { addToCart } = useAuth()

  
    return (
                    <Box className="card card1" style={{'--my-image': `url(${image.url})`, marginBottom : "100px"}}>
                        <div className="border">
                        <CardContent sx={{textAlign : 'left'}}>
                            <Typography gutterBottom variant="h5" component="div">
                            {name}
                            </Typography>
                           
                        </CardContent>
                                <div className="icons">
                                        <Button onClick={() => addToCart(id)}>
                                            <ShoppingCart className='fa' ariaHidden="true"/>
                                        </Button>
                                    <Favorite className='fa' ariaHidden="true"/>
                                    <Facebook className='fa' ariaHidden="true"/>
                                    <YouTube className='fa' ariaHidden="true"/>
                                    <Link to={`/product-view/${product.id}`}>
                                        <Button>View</Button>
                                    </Link>
                                </div>
                        </div>
                    </Box>
    )
}

export default Product
