import multer from "multer"
import { randomUUID } from "crypto";
import mime from "mime";

export const generatePhotoFilename = (mimeType:string) => { 
    const randomFilename = `${randomUUID()}-${Date.now()}}`
    const fileExtension = mime.getExtension(mimeType)
    const fileName = `${randomFilename}.${fileExtension}`
    
    return fileName
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
    },
    filename: (request, file, cb) => { 
        
        return cb(null, generatePhotoFilename(file.mimetype));
    }
});

export const multerOptions = {}

export const initMulterMiddleware = () => { 
    return multer({ storage, ...multerOptions })
}
