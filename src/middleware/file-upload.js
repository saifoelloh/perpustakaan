const multer = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: (req, file, cb) => {
    const fileExt = file.mimetype.split('/')[1]
    const uniqueSuffix = `${Date.now()}` + Math.round(Math.random() * 1e9)
    const fileName = `${uniqueSuffix}.${fileExt}`
    req.fileName = `/uploads/${fileName}`
    cb(null, fileName)
  },
})

const fileUpload = multer({
  storage,
  limits: { fileSize: Math.pow(1024, 2) * 1 },
}).single('photo')

const fileUploadMw = (req, res, next) => fileUpload(req, res, () => next())

module.exports = fileUploadMw
