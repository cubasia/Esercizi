let a = {name: "peppe"}

class Idenficativo {
 #nomeInterno =""
    constructor(comeTeChiami,numeroCartaIdentita) {
        this.#nomeInterno = comeTeChiami
        this.numero=numeroCartaIdentita
    }
    view() {
        return this.#nomeInterno
    } 
}

class IdeCognome extends Idenficativo {
    #cognomeInterno = "";
  constructor(nome, cognome) {
    super(nome);
    this.#cognomeInterno = cognome;
  }
  viewC() {
    return this.#cognomeInterno;
  }
      
    viewNomeCognome() {
    return super.view()+this.#cognomeInterno  
  }  
  
}

let c = new IdeCognome("ale", "fiocco") //attenzione, i parametri sono sempre opzionali,
//se te li scordi non te lo ricorda
console.log(c.viewNomeCognome())