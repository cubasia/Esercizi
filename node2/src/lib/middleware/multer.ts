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

const VALID_MIME_TYPES= ["image/png", "image/jpg"]
const MAX_FILE_SIZE = 6 * 1024 * 1024;
const fileFilter:multer.Options["fileFilter"] = (request, file, cb) => { 
    if (VALID_MIME_TYPES.includes(file.mimetype)) { 
        cb(null, true)
    }
    else cb(new Error("Error: the file must be a jpg o png image"))

}
export const multerOptions = {
  fileFilter,
  limits: {
    fileSize: MAX_FILE_SIZE,
  },
};

export const initMulterMiddleware = () => { 
    return multer({ storage, ...multerOptions })
}
