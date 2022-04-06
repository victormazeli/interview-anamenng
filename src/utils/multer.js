/* eslint-disable prefer-const */
import multer, { diskStorage } from 'multer'
import { extname } from 'path'
// Multer config

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './upload');
     },
    filename: function (req, file, cb) {
        cb(null , file.fieldname + '_' + Date.now() + extname(file.originalname));
    }
});

export default multer({
    storage: storage,
    limits: {
        fileSize: 5000000
    },
    fileFilter: (req, file, cb) => {
        let ext = extname(file.originalname)
        if (ext !== '.xlsx') {
            cb(new Error('File type is not supported'), false)
            return
        }
        cb(null, true)
    },
})
