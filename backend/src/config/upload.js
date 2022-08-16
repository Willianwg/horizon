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

            callback(null, `${name}~${Date.now()}${extensao}`)

        }
    })
};