
import { commerce } from "../../lib/commerce";
import { useState, useEffect } from "react";
import { Card,Grid, Button, Container, Typography, CardMedia, Rating } from "@mui/material";
import { ShoppingCart } from '@mui/icons-material';
import useAuth from './../../hooks/useAuth'
const createMarkup = (text) => {
   return { __html: text };
 };

const ProductId = () => {
   const [product, setProduct] = useState({});
   const [quantity, setQuantity] = useState(1);
   const [loading, setLoading] = useState(true);
  const { addToCart } = useAuth()

   const fetchProduct = async (id) => {
     const response = await commerce.products.retrieve(id);
     const { name, price, image, quantity, description } = response;
     setProduct({
       id,
       name,
       quantity,
       description,
       src: image.url,
       price: price.formatted_with_symbol,
     });
   };
 
   
   useEffect(() => {
     const id = window.location.pathname.split("/");
     fetchProduct(id[2]);
   }, []);
 
   const handleQuantity = (param) => {
     if (param === "decries" && quantity > 1) {
       setQuantity(quantity - 1);
     }
     if (param === "increase" && quantity < 10) {
       setQuantity(quantity + 1);
     }
   };
 
   return (
    <Container>
      <Grid container sx={{display :  'flex', padding : 10}} >
      <Grid item xs={6} md={8} lg={6} className="image-wrapper">
      
         <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              image={product.src}
              alt="Paella dish"
            />
         </Card>
      </Grid>
      <Grid item xs={6} md={8} lg={6} className="image-wrapper" sx={{textAlign: 'left'}}>
      
          <Typography variant="h3" paragraph>{product.name}</Typography>
          <Typography variant="h5" sx={{color : 'rgb(210, 63, 87)'}}>{product.price}</Typography>
          <Grid sx={{display : 'flex', pt : 5,pb : 5}}>
                              <Button
                                size="small"
                                variant="contained"
                                className="increase-product-quantity"
                                onClick={() => {
                                  handleQuantity("increase");
                                }}
                                >+</Button>
                                <Typography className="quantity ps-4 pe-4" variant="h6">
                                    Quantity: {quantity}
                                    </Typography>
                                    <Button
                                    size="small"
                                    color="secondary"
                                    variant="contained"
                                    onClick={() => {
                                      handleQuantity("decries");
                                    }}
                                    >
                                    -
                                    </Button>
                                  </Grid>
                                    <Rating name="no-value" value={null} /> <br/>
                                    <Button onClick={()=>  addToCart(product.id,quantity)} variant="contained" sx={{backgroundColor : 'rgb(210, 63, 87)', paddingTop : '10px'}}>Add To Cart <ShoppingCart/></Button>

                                  </Grid>

    </Grid>
    </Container>
   );
};

export default ProductId;
