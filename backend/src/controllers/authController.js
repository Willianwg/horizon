const User = require("../models/user");

module.exports = {
    
    async show(req, res){
        
        const user = await User.findByPk(req.userId);
        
        const response = {
           name: user.name,
           email: user.email
        }
        
        return res.json({ user: response });
        
        
    }
    
}