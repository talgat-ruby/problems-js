class BankAccount {
  #balance = 0;

  withdraw(amount: number): number {
    if (amount <= 0 || amount > this.#balance) {
      return -1;
    } else {
      this.#balance -= amount;
      return this.#balance;
    }
  }

  deposit(amount: number): number {
    if (amount <= 0 || amount > 1000000) {
      return -1;
    } else {
      this.#balance += amount;
      return this.#balance;
    }
  }
}

export default BankAccount;

