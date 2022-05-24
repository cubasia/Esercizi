export interface Elemento{
    nome: string;
    via:string;
color:string;
}

let element: Partial<Elemento>={
    nome: "string;"
}

function Gino(elementa: Elemento){
    console.log(elementa)
}
Gino(element)