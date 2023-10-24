class BankAccount {
    #balance;
  
    constructor() {
      this.#balance = 0;
    }
  
    withdraw(amount) {
      if (amount > this.#balance) {
        return -1; 
      }
      this.#balance -= amount;
      return this.#balance;
    }
  
    deposit(amount) {
      if (amount > 1_000_000) {
        return -1; 
      }
      this.#balance += amount;
      return this.#balance;
    }
  }
  
  export default BankAccount;
