import logo from './logo.svg';
import './App.css';
import Products from './Pages/Products/Products';
import Navbar from './Pages/Navbar/Navbar';
import Home from './Pages/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Footer from './Pages/Footer/Footer';
import SignIn from './Pages/SignIn/SignIn';
import Signup from './Pages/SignIn/Signup'
import AuthProvider from './Context/AuthProvider'
import ProductId from './Pages/Products/ProductId'
import Cart from './Pages/Cart/Cart';
import Checkout from './Pages/Checkout/Checkout';
function App() {
  
  return (
    <div className="App">
        <AuthProvider>
        <BrowserRouter>

          <Routes>
            <Route exact path="/" element={
                <>
                  <Navbar/>
                  <Home />
                  <Footer/>
                </>
                }/>
              <Route path='/home' element={
                <>
                  <Navbar/>
                  <Home />
                  <Footer/>
                </>
                }/>
              <Route path="/products" element={
                <>
                  <Navbar/>
                  <Products />
                  <Footer/>
                
                </>
                }/>
              <Route path="/signin" element={
                <>
                  <Navbar/>
                  <SignIn />
                  <Footer/>
                
                </>
                }/>
              <Route path="/signup" element={
                <>
                  <Navbar/>
                  <Signup />
                  <Footer/>
                
                </>
                }/>
              <Route path="/product-view/:productId" element={
                <>
                  <Navbar/>
                  <ProductId />
                  <Footer/>
                </>
                }/>
                
              <Route path="/cart" element={
                <>
                  <Navbar/>
                  <Cart/>
                  <Footer/>
                </>
                }/>
              <Route path="/checkout" element={
                <>
                  <Navbar/>
                  <Checkout/>
                  <Footer/>
                </>
                }/>
                
             
                
          </Routes>
          </BrowserRouter>
        </AuthProvider>
    </div>
  );
}

export default App;
