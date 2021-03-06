import React from 'react';
import { Grid, TextField } from '@material-ui/core';
import { Controller, useFormContext } from 'react-hook-form';

const CustomTextFeild = ({name,label,required}) => {
  const {control} = useFormContext();
    
  return (
      <Grid item xs={12} sm={6}>
          <Controller
          control={control}
          name={name}
          render = {({ field})=> (
              <TextField
                  fullWidth
                  label={label}
                  required={required}
              />
          )}
       />
      </Grid>
  )
};

export default CustomTextFeild;
