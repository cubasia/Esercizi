class veicolo {
  constructor(name) {
    this.name = name;
  }
}

class moto extends veicolo {
  constructor(name) {
    super(name);
    this.ruote = 2;
  }
}
class auto extends veicolo {
  constructor(name) {
    super(name);
    this.ruote = 4;
  }
}
class concessionario {
  constructor(name) {
    this.name = name;

    this.moto = [];
    this.auto = [];
  }

  aggiungi(veicolo, quantita) {
    if (veicolo instanceof  moto) {
      for (let i = 0; i < quantita; i++) {
        this.moto = [...this.moto, veicolo];
      }
    }
    if (veicolo instanceof auto) {
      for (let i = 0; i < quantita; i++) {
        this.auto = [...this.auto, veicolo];
      }
    }
  }

  inventario() {
    console.log(this.auto);
    console.log(this.moto);
  }
}

let Gino = new concessionario("Salaria");
Gino.aggiungi(new moto("bmw"), 2);
Gino.aggiungi(new auto("bmw"), 2);
Gino.inventario();

