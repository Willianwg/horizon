import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import { LandingPage } from "./pages/Landing";
import { SingIn } from "./pages/SingIn";
import { Search } from "./pages/Search";

export function AppRoutes(){
    
    return(
       <Router>
        <Routes>
        
          <Route path="/" element={ <LandingPage/> }/>
          <Route path="/singIn" element={ <SingIn/> }/>
          <Route path="/search" element={ <Search/> }/>
          
        </Routes>
       </Router>
        
    )
    
}