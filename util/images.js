const multer = require("multer");
const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");

cloudinary.config({
    cloud_name: process.env.SPAZI_CD_NAME,
    api_key: process.env.SPAZI_CD_API_KEY,
    api_secret: process.env.SPAZI_CD_API_SECRET
    });
    const storage = cloudinaryStorage({
    cloudinary: cloudinary,
    folder: "spazi-app",
    allowedFormats: ["jpg", "png"],
    transformation: [{ width: 500, height: 500, crop: "limit" }]
    });
    const parser = multer({ storage: storage });
