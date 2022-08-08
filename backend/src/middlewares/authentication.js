const jwt = require("jsonwebtoken");


module.exports ={
    async auth (req, res, next){
        
        const authHeaders = req.headers.authorization;
        
        if(!authHeaders) 
          return res.status(401).json({ error:"no token provided"});
          
        const parts = authHeaders.split(" ");
        
        if(!parts[1])
          return res.status(401).json({ error:"token error" });
          
        const [scheme, token] = parts;
        
        
        if(!/^Bearer$/i.test(scheme) || !token)
          return res.status(401).json({ error:"token malformatted" });
        
        jwt.verify(token,"Eu sou o milior", (err, decoded)=>{
            if(err) return res.status(401).json({ error:"invalid token" });
        
        
            req.userId = decoded.id;
        
            return next();
        
        })
        
    }
}