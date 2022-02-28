class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    this.#amount += amount;
  }

  withdraw(amount) {
    this.#amount -= amount;
   // this.view()
  }

  view() {
    console.log(this.#amount);
  }
}

class BankAccountVip extends BankAccount{
  constructor(deposito) {
    super(deposito)
    if (deposito >= 1000) this.interesse(deposito);
    
  }
  deposit(deposito) {
    super.deposit(deposito);
   // super.view();
    if (deposito >= 1000) this.interesse(deposito)
  }

  interesse(deposito) {
    super.deposit((deposito * 3) / 100)
    //super.view();
  }
}


const bankAccountVip = new BankAccountVip(1000); //1030
bankAccountVip.deposit(500);//1530
bankAccountVip.deposit(1200);//2766
bankAccountVip.withdraw(800);//1966
bankAccountVip.deposit(3500);//5571
bankAccountVip.view();