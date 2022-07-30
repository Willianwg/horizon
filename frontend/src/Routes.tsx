import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import { LandingPage } from "./pages/Landing";

export function AppRoutes(){
    
    return(
       <Router>
        <Routes>
        
          <Route path="/" element={ <LandingPage/> }/>
          
        </Routes>
       </Router>
        
    )
    
}