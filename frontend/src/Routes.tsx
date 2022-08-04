import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import { LandingPage } from "./pages/Landing";
import { SingIn } from "./pages/SingIn";

export function AppRoutes(){
    
    return(
       <Router>
        <Routes>
        
          <Route path="/" element={ <LandingPage/> }/>
          <Route path="/singIn" element={ <SingIn/> }/>
          
        </Routes>
       </Router>
        
    )
    
}