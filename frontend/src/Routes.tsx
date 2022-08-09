import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import { LandingPage } from "./pages/Landing";
import { SingIn } from "./pages/SingIn";
import { Search } from "./pages/Search";
import { AuthProvider } from "./contexts/AuthProvider";

export function AppRoutes(){
    
    return(
       <Router>
       <AuthProvider>
        <Routes>
        
          <Route path="/" element={ <LandingPage/> }/>
          <Route path="/singIn" element={ <SingIn/> }/>
          <Route path="/search" element={ <Search/> }/>
          
        </Routes>
       </AuthProvider>
       </Router>
        
    )
    
}