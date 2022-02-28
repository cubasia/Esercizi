class BankAccount {
   #saldo=0
    constructor(deposito) {
      this.#saldo = !deposito || deposito < 0 ? 0 : deposito;
      this.view()
  }

  deposit(deposito) {
      this.#saldo += deposito;
      this.view();
  }
  withdraw(deposito) {
      this.#saldo -= Math.abs(deposito);
      this.view();
  }
  view() {
      console.log(`Il tuo saldo è ${this.#saldo}`);
  }
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();
