class Material{
    
    descriptionMaterial= "Anello"   
}

class Immagine {
    constructor() {
        this.a = "io"
        this.b = "tu"
    }

    maggiore() {
        return a >b
    }
}

let mat = new Material()
let img = new Immagine()

console.log(uti.stampaDesc.call(mat))
console.log(uti.stampaDesc.call(img))


