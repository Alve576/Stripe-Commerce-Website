import {useEffect, useState} from 'react'
import initializeAuthApp from "../Pages/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged,getIdToken  } from "firebase/auth";
import { commerce } from '../lib/commerce';


initializeAuthApp()

const useFirebase = () => {
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');
    const [email,setEmail] = useState('');
    const [user, setUser] = useState({});
    const [cart,setCart] = useState({});
    const [order, setOrder] = useState({});
    const auth = getAuth();

//  Cart ************************************************************
    
    const emptySingleCart = async (id) => {
       await commerce.cart.remove(id).then((response) => {console.log(response)});

    }
 
    const emptyCart = async () => {
        await  commerce.cart.empty().then((items) =>{
            setCart(items)
        });

    }

    const fetechCartProduct = async () => {
        await commerce.cart.retrieve().then((items) => {
             setCart(items)
         });
   }
    const addToCart = (id,quantity) => {
  
        commerce.cart.add(id, quantity).then((response) => console.log(response));
    
      }


    useEffect(() => {
        fetechCartProduct();
    },[])


    //   Authentication  ****************************************
                const handleRegister = (e) => {
                        e.preventDefault()
                        createUserWithEmailAndPassword(auth, email, password)
                        .then((userCredential) => {
                        // Signed in 
                        const user = userCredential.user;
                        console.log(user)


                    
                        // ...
                        })
                        .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        console.log(errorMessage)
                        // ..
                        });
                };



                // sign in with email and pass 
                const handleLogin = (e) => {
                    e.preventDefault()
                                signInWithEmailAndPassword(auth, email, password)
                        .then((userCredential) => {
                            // Signed in 
                            const user = userCredential.user;
                            console.log(user);

                            // ...
                        })
                        .catch((error) => {
                            const errorCode = error.code;
                            const errorMessage = error.message;
                        });
                };


                // sign out user
                const logout = () => {
                    signOut(auth) 
                    .then(() => {
                        console.log('loged out')
                        setUser({});

                    })
                }

                // updateFeild 
                const onNameChange = (e) => {
                    e.preventDefault();
                    setName(e.target.value)        
                };
            
                const onEmailChange = (e) => {
                    e.preventDefault();
                    setEmail(e.target.value)        
                };
                const onPasswordChange = (e) => {
                    e.preventDefault();
                    setPassword(e.target.value)        
                };

                useEffect(() => {
                    const unsubscribe = onAuthStateChanged(auth, (user) => {
                        if (user) {
                            getIdToken(user)
                                .then(idToken => localStorage.setItem('idToken', idToken));
                            setUser(user);
                        }
                        else {
                            setUser({});
                        }
                    });
                    return () => unsubscribe;
                }, []);

    //   Authentication  ****************************************
    const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
        try {
          const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);
    
          setOrder(incomingOrder);
    
        } catch (error) {
          console.log(error.data.error.message);
        }
      };
    return {
            handleRegister,
            handleLogin,
            logout,
            onNameChange,
            onEmailChange,
            onPasswordChange,
            user,
            addToCart,
            cart,
            emptyCart,
            emptySingleCart,
            order,
            handleCaptureCheckout
            
            
    }
}


export default useFirebase ; 
