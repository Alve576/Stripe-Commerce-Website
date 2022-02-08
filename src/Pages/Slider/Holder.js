import React from 'react'
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography, Box } from '@mui/material';
const Holder = () => {
   
    return (
                
                <Box sx={{display : 'inline-flex' ,alignItems: 'center',justifyContent : 'space-around'}}>
                       
                        <Box sx={{textAlign : 'left',width : '46%'}} p={4}>
                          
                                <Typography variant="h3" gutterBottom >
                                    Flexible Chair
                                </Typography>

                                <Typography variant="p">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur.
                                
                            </Typography> <br/>
                            <Button variant="contained" sx={{backgroundColor : 'rgb(255, 112, 4)'}}>Shop Now</Button>
                        </Box>
                       <Box p={4}>
                       <CardMedia
                            component="img"
                            image='https://furns-react.netlify.app/images/slider-image/slider-1.png '
                            alt="green iguana"

                        />
                       </Box>

                </Box>
               
    )
}

export default Holder
