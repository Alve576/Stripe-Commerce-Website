import React, { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form';
import CustomTextFeild from './CustomTextFeild/CustomTextFeild';
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core';
import { commerce } from './../../../lib/commerce';
import { Link } from 'react-router-dom';

const AdressForm = ({checkoutToken,next}) => {
  const methods = useForm();
  const [shippingSubDivisions, setShippingSubDivisions] = useState([]);
  const [shippingSubDivision, setShippingSubDivision] = useState('');
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState('');

  const fetchSubdivisions = async ( ) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions("BD");
    setShippingSubDivisions(subdivisions);
    setShippingSubDivision(Object.keys(subdivisions)[0]);

  }

  const fetchOptions = async (checkoutTokenId) => {
      const options  = await commerce.checkout.getShippingOptions(checkoutTokenId);
      setShippingOptions(options);
      setShippingOption(Object[0].id)
    };

    useEffect(()=>{
      fetchSubdivisions()
    },[]);

    useEffect(()=>{
      if(shippingSubDivision) fetchOptions(checkoutToken.id,shippingSubDivision)
      
    },[shippingSubDivision])

  return (
      <>
      <Typography variant="h6" gutterBottom>Shipping address</Typography>
      <FormProvider { ...methods}>
        <form onSubmit={methods.handleSubmit((data) => next({...data,shippingSubDivision,shippingOption}))}>
          <Grid container spacing={3}>
            <CustomTextFeild required name="firstName" label="First name" />
            <CustomTextFeild required name="lastName" label="Last name" />
            <CustomTextFeild required name="address1" label="Address line 1" />
            <CustomTextFeild required name="email" label="Email" />
            <CustomTextFeild required name="city" label="City" />
            <CustomTextFeild required name="zip" label="Zip / Postal code" />
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Subdivision</InputLabel>
              <Select value={shippingSubDivision} fullWidth onChange={(e) => setShippingSubDivision(e.target.value)}>
                {Object.entries(shippingSubDivisions).map(([code, name]) => ({ id: code, label: name })).map((item) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Options</InputLabel>
              <Select value={shippingOption} fullWidth onChange={(e) => setShippingOption(e.target.value)}>
                {shippingOptions.map((sO) => ({ id: sO.id, label: `${sO.description} - (${sO.price.formatted_with_symbol})` })).map((item) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
          </Grid>
          <br />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Link to="/cart">
           <Button variant="outlined">Back to Cart</Button>
           </Link>
            <Button type="submit" variant="contained" color="primary">Next</Button>
          </div>
        </form>
      </FormProvider>
             </>
    );
};

export default AdressForm;
