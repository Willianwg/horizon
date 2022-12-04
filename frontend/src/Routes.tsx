import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import { LandingPage } from "./pages/Landing";
import { SignUp } from "./pages/SignUp";
import { Search } from "./pages/Search";
import { Login } from "./pages/Login";
import { Checkout } from "./pages/Checkout";
import { Details } from "./pages/ProductDetails";
import { AuthProvider } from "./contexts/AuthProvider";
import { NewProduct } from "./pages/NewProduct";
import { User } from "./pages/UserDashboard";
import { Cart } from "./pages/Cart";


export function AppRoutes(){
    
    return(
       <Router>
       <AuthProvider>
        <Routes>
        
          <Route path="/" element={ <LandingPage/> }/>
          <Route path="/signup" element={ <SignUp/> }/>
          <Route path="/logIn" element={ <Login/> }/>
          <Route path="/user/:id" element={ <User/> }/>
        
          <Route path="/search" element={ <Search/> }/>
          <Route path="/details/:id" element={ <Details/> }/>
          <Route path="/details/:id/checkout" element={ <Checkout/> }/>
          <Route path="/new-product" element={ <NewProduct/> }/>
          <Route path="/cart" element={ <Cart/> }/>
        
        </Routes>
       </AuthProvider>
       </Router>
        
    )
    
}