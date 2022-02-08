import { CircularProgress,Paper, Stepper, Step, StepLabel, Typography, Divider, Button } from '@material-ui/core';
import useStyles from './Styles';
import AdressForm from './AdressForm/AdressForm';
import PaymentForm from './PaymentForm/PaymentForm';
import { useEffect, useState } from 'react';
import useFirebase from './../../hooks/useFirebase';
import { commerce } from './../../lib/commerce';
import { Link } from 'react-router-dom';
const steps = ['Shipping adress','payment details'];

const Checkout = () => {  
    const classes = useStyles();
    const [activeStep,setActiveStep] = useState(0);
    const [shipping,setShipping] = useState({});
    const [isFinished,setIsfinished] = useState(false);
    const [checkoutToken, setCheckoutToken] = useState(null);
    const {cart,order,erMsg,handleCaptureCheckout} = useFirebase();
    
    useEffect(() => {
      const genarateToken = async ( ) => {
        try {
          const token = await commerce.checkout.generateToken(cart.id,{type : 'cart'} )
         .then(token => {
           setCheckoutToken(token)
           console.log(token)

         })
        }catch(error){

        }
      };

      genarateToken();
    },[cart])

    const nextStep = () => setActiveStep((prevActvieStep)=> prevActvieStep+1);
    const backStep = () => setActiveStep((prevActvieStep)=> prevActvieStep-1);
    const next = (data) => {
      setShipping(data);
      nextStep();
    } ;

    const timeout = () => {
      setTimeout(()=>{
        setIsfinished(true);
      },3000)
    }
    let Confiremation = () => (order.customer ? (
      <>
        <div>
          <Typography variant="h5">Thank you for your purchase, {order.customer.firstname} {order.customer.lastname}!</Typography>
          <Divider className={classes.divider} />
          <Typography variant="subtitle2">Order ref: {order.customer_reference}</Typography>
        </div>
        <br />
        <Button variant="outlined" type="button" to="/">Back to home</Button>
      </>
    ) : isFinished ? (
      <>
        <div>
          <Typography variant="h5">Thank you for your purchase, Shad Islam Alvee</Typography>
          <Divider className={classes.divider} />
        </div>
        <br />
        <Button variant="outlined" type="button" to="/">Back to home</Button>
      </>
    ) : isFinished ? (
      <>
      <div>
        <Typography variant="h5">Thank you for your purchase, Shad Islam Alvee</Typography>
        <Divider className={classes.divider} />
      </div>
      <br />
      <Link to='/'><Button variant="outlined" type="button" to="/">Back to home</Button></Link>
    </>
    ) :(
      <div className={classes.spinner}>
        <CircularProgress />
      </div>
    )); 

    if (erMsg) {
      Confiremation = () => (
        <>
          <Typography variant="h5">Error: {erMsg}</Typography>
          <br />
          <Button variant="outlined" type="button" to="/">Back to home</Button>
        </>
      );
    }

    const Form = () => activeStep === 0 
    
    ? <AdressForm checkoutToken={checkoutToken} next={next}/>
    : <PaymentForm timeout={timeout} nextStep={nextStep} checkoutToken={checkoutToken} shipping={shipping} backStep={backStep} onCaptureCheckout={handleCaptureCheckout}/>
    
    return (
        <>
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center">Checkout</Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map(step=>(
                <Step key={step}>
                    <StepLabel>{step}</StepLabel>
                </Step>
            ))}           
          </Stepper>
          {activeStep === steps.length ? <Confiremation/> : checkoutToken && <Form/>}
        </Paper>
      </main>
    </>
    )
}

export  default Checkout;