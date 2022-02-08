import { Card, CardContent, CardMedia, Grid, Button, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/system';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import React, { useEffect, useState } from 'react';
import {commerce} from './../../lib/commerce'
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';
const Cart = () => {
    const {cart,emptyCart,emptySingleCart} = useAuth();
   
  

    return (
        
        <Grid>
            {
                cart ? <Typography variant='h3'>Your Cart</Typography> :
                <Typography variant='h3'>Your Cart is Empty</Typography>
            }
              
            {
              !cart.line_items ? <Typography variant="subtitle1">You have no items in your shopping cart,
                  <Link to='/products' >Start adding some</Link>
                </Typography> 
                :
                cart.line_items.map(item => (
                  <Card sx={{ display: 'flex' }}>
                  <Box sx={{ display: 'flex'}}>
                   
                    <CardMedia
                      component="img"
                      sx={{ width: 151 }}
                      image={item.image.url}
                      alt="Live from space album cover"
                    />

                    <CardContent sx={{ flex: '1 0 auto' }}>
                      <Typography component="div" variant="h5">
                      {item.name}
                      </Typography>
                     
                      <Typography variant="h6" color="text.secondary" component="div">
                       Price: {item.price.formatted_with_symbol}
                      </Typography>
                      <Typography variant="h6" color="text.secondary" component="div">
                       Quantity: {item.quantity}
                      </Typography>
                    </CardContent>
                    <Button onClick={() => emptySingleCart(item.id)}>Remove</Button>

                  </Box>
                  
                </Card>
              ))
            }
            <Button onClick={() => emptyCart()}>Empty Cart</Button>
            <Link to='/checkout'>
              <Button>Checkout All products</Button>
            </Link>            
        </Grid>
  
  
  );
};

export default Cart;
