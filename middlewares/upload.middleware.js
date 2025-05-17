const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Function to generate dynamic multer middleware based on folder
const getMulterUploader = (folderName) => {
  // Ensure upload folder exists
  const destPath = path.join('uploads', folderName);
  if (!fs.existsSync(destPath)) {
    fs.mkdirSync(destPath, { recursive: true });
  }

  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, destPath);
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      cb(null, uniqueSuffix + path.extname(file.originalname));
    },
  });

  

  return multer({ storage: storage });
};

module.exports = { getMulterUploader };
