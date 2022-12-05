const multer = require("multer");
const path = require("path");

module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, "..", "..", "uploads"),
        filename: (req, file, callback)=> {
            // extensão é o .png ou .jpg  e tal
            const extensao = path.extname(file.originalname);
            // nome sem a extensão
            const name = path.basename(file.originalname, extensao);

            let finalName = name;
            let spaced = name.split(' ');
            if(spaced.length > 1){
                finalName = spaced.join('-');
            }

            callback(null, `${finalName}~${Date.now()}${extensao}`)

        }
    })
};