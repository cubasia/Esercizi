import { generatePhotoFilename } from "./multer";

describe("generatePhotoFileName", () => { 
    test.each([
    ["image/png", "png"],
    ["image/jpeg", "jpeg"],
    ])(
        "generate filename with correct extension",
        (mimeType:string, ext:string) => { 
            const fileName = generatePhotoFilename(mimeType);
            const [, fileExtension] = fileName.split(".");
            
            expect(fileExtension).toEqual(ext);
        }
)
})