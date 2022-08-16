const Image = require("../models/ImageTest");


module.exports = {

    async store(req, res, next){
        
        if(!req.file) return;
        
        console.log(req.file);

        const newImage = {
            imageName: req.file.filename
        }

        console.log(newImage);
        
        const image = await Image.create(newImage);
        
        console.log(image);
        
        return res.json(image);
        
    },
    
    async index (req, res){
        
        const images = await Image.findAll();
        
        if(!images) return res.status(400).json({error:"error"});

        //const formatedImages= images.map(image=> image.imageData = image.imageData.toString("base64"));
        
        return res.json(images);
        
    }
}