import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ScrollToTop from "react-scroll-to-top";
import User from './Component/Pages/Home/User/User';
import Wishlist from './Component/Pages/Home/Wishlist/Wishlist';
import Header from './Component/Header/Header';
import Loader from './Component/Loader/Loader';
import About from './Component/Pages/About/About';
import ContactForm from './Component/Pages/Contact/ContactForm';
import NewAccount from './Component/Pages/Home/NewAccount/NewAccount';
import gif2 from "../src/Assets/Slider/roll-out carpet.gif"
import Category from './Component/Category/Category';
import Product from './Component/Product/Product';
import SinglePro from './Component/SingleProPage/SinglePro';
import Footer from './Component/Footer/Footer';
import PrivacyPolicy from './Component/Pages/PrivacyPolicy/PrivacyPolicy';
import TermsConditions from './Component/Pages/Terms-Conditions/TermsConditions';
import Accessibility from './Component/Pages/Accessibility/Accessibility';
import FAQ from './Component/Pages/FAQs/FAQ';
import StoreLocator from './Component/Pages/StoreLocator/StoreLocator';
import GracefulSmiles from './Component/Pages/GracefulSmiles/GracefulSmiles';
import MyContextProvider from './Component/Context/MyContextProvider';
import Alert from './Component/Common/Alert/Alert';
import LoaderForm from './Component/Common/LoaderForms/LoaderForm';
import Cart from './Component/Pages/Home/Cart/Cart';
import Checkout from './Component/Pages/Checkout/Checkout';
import PaymentForm from './Component/Pages/PaymentForm/PaymentForm';
import ConfirmationPage from './Component/Pages/ConfirmationPage/ConfirmationPage';
import Home from './Component/Pages/Home/Home';


import GotoTop from './Component/Common/GotoTop';
import OrderDetails from './Component/Pages/Home/OrderDetails/OrderDetails';
import ForgotPassword from './Component/Pages/Home/User/ForgotPassword/ForgotPassword';
import ChangePassword from './Component/Pages/Home/User/ChangePassword/ChangePassword';
import ShippingReturns from './Component/Pages/Shipping/ShippingReturns';
import NoPage from './Component/Pages/Home/NoPage/NoPage';





const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
    setIsLoading(false);
    }, 2000);
    }, []);

  return (
    isLoading ?
    <Loader title="Welcome to World Of Beauty" src={gif2} alt=""/>:

    
    <BrowserRouter>
    <MyContextProvider>
      <Alert/> 
     <ScrollToTop
    smooth
    viewBox="3 0 91 88"
    color="#E75480"
    height="30" 
    width="28"
    style={{backgroundColor:"#fff0f3",borderRadius:"50%",border:"1px solid #E75480", right:'20px'}}
    svgPath="M47.3,1.7c-2.2-2.6-6.4-1.5-8.1,1C29.9,17.4,19.4,31.1,5.9,42.2c-3.6,2.9-0.3,7.9,3.4,8.3   c6.1,0.6,12.2,1.1,18.3,1.7c-0.6,5.3-1.1,10.6-1.7,15.8c-0.6,6-2.4,12.8-0.4,18.6c0.6,1.7,2.8,2,3.8,0.5c3.4-5.1,3.4-12.2,4.3-18.1   c1-6.5,2-13.1,2.9-19.6c0.5-3.1-1.2-5.1-4.2-5.5c-4-0.5-7.9-1.1-11.9-1.6c9-8.5,16.7-18.2,23.7-28.5c8.6,10.1,17.4,19.9,26.9,29   c-3.4,0.3-6.8,0.5-10.2,0.8c-2.3,0.2-5.1,2-4.8,4.8c1.4,10.6,2.7,21.2,4.1,31.9c-6.5,0.4-12.9,1.6-19.3,2.2c-4.9,0.4-4.7,6.9,0,7.5   c8.2,1.1,16.2,0.3,24.4-0.1c1.6-0.1,2.7-0.7,3.5-1.6c1.1-0.7,1.9-2,1.6-3.9c-1.1-8.7-2.8-21-4.2-31.7c5.3-0.5,10.6-1,15.8-1.3   c3.8-0.3,6.5-5.1,3.3-8C71.6,30.4,59.5,16,47.3,1.7z"
    />
      <GotoTop/>
      <LoaderForm/>
    <Header/> 
    <Routes>
      <Route path='/' element={<Home/>}/>/
      <Route path='/user' element={<User/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
      <Route path='/payment' element={<PaymentForm/>}/>
      <Route path='/confirmation' element={<ConfirmationPage/>}/>
      <Route path='/forgotpassword' element={<ForgotPassword/>}/>
      <Route path='/changepassword' element={<ChangePassword/>}/>
      <Route path='/wishlist' element={<Wishlist/>}/>
      <Route path='/order' element={<OrderDetails/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/about-us' element={<About/>}/>
      <Route path='/contact-us' element={<ContactForm/>}/>
      <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
      <Route path='/terms-conditions' element={<TermsConditions/>}/>
      <Route path='/shipping-returns' element={<ShippingReturns/>}/>
      <Route path='/accessibility' element={<Accessibility/>}/>
      <Route path='/FAQs' element={<FAQ/>}/>
      <Route path='/store-locator' element={<StoreLocator/>}/>
      <Route path='/smiles' element={<GracefulSmiles/>}/>
      <Route path='/new-account' element={<NewAccount/>}/>
      <Route path='/shop-by-category' element={<Category/>}/>
      <Route path='category/:products' element={<Product/>}/>
      <Route path='category/:product/:single' element={<SinglePro/>}/> 
      <Route path='*' element={<NoPage/>}/> 
    </Routes>
    <Footer/> 
   
    </MyContextProvider>
    </BrowserRouter>
    
    
  )
}

export default App