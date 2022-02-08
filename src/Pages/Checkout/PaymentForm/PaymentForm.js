import React from 'react';
import { Link } from 'react-router-dom';
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement, Elements, ElementsConsumer } from '@stripe/react-stripe-js'; 
const stripePromise = loadStripe('pk_test_51KHL2cFNwjMkbbtLm69eGwt4oLKOLjbw4ta99kNRlpULjIDq6WSL49MVsjvteYRJbXkLBLwkdmE3aLXHswRe5Peh008CueIilF');

const PaymentForm = ({backStep,checkoutToken,shipping,onCaptureCheckout,nextStep,timeout}) => {
    
    const handleSubmit = async (event,elements,stripe) => {
        event.preventDefault()
        const cardElement = elements.getElement(CardElement)
        if(!stripe || !elements) return;
        
        const {error, paymentMethod } = await stripe.createPaymentMethod({type : 'card', card : cardElement});

        if(error) {
            console.log(error);

        }else{
            const ordarData = {
                line_items: checkoutToken.live.line_items,
                customer: { firstname: shipping.firstName, lastname: shipping.lastName, email: shipping.email },
                shipping: { name: 'International', street: shipping.address1, town_city: shipping.city, county_state: shipping.shippingSubdivision, postal_zip_code: shipping.zip, country: shipping.shippingCountry },
                fulfillment: { shipping_method: shipping.shippingOption },
                payment: {
                    gateway: 'stripe',
                    stripe: {
                      payment_method_id: paymentMethod.id,
                    },
                  },
                }   
                onCaptureCheckout(checkoutToken.id, ordarData);
                timeout()
                nextStep();
        }
    };
  return (
      <div>
           <Typography variant='h6'gutterBottom style={{margin : '20px 0'}}>
                Payment Method
            </Typography>
            <Elements stripe={stripePromise}>
                <ElementsConsumer>{({ elements, stripe }) => (
                <form onSubmit={(e)=> handleSubmit(e,elements,stripe)}>
                    <CardElement />
                    <br /> <br />
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button variant="outlined" onClick={backStep}>Back</Button>
                    <Button type="submit" variant="contained" disabled={!stripe} color="primary">
                        Pay {checkoutToken.live.subtotal.formatted_with_symbol}
                    </Button>
                    </div>
                </form>
                )}
                </ElementsConsumer>
            </Elements>
      </div>
      );
};

export default PaymentForm;
