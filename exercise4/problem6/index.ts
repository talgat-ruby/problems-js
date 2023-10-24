class BankAccount {
  #balance;

  constructor() {
    this.#balance = 0;
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      return -1; // Cannot withdraw more than the balance
    }
    this.#balance -= amount;
    return this.#balance;
  }
}

class FedexAccount {
  sendMail(recipient) {
    console.log(`Sending mail to ${recipient} via FedEx.`);
  }

  receiveMail(sender) {
    console.log(`Receiving mail from ${sender} via FedEx.`);
  }
}

class KazPostAccount extends BankAccount {
  sendMail(recipient) {
    console.log(`Sending mail to ${recipient} via KazPost.`);
  }

  receiveMail(sender) {
    console.log(`Receiving mail from ${sender} via KazPost.`);
  }
}

export { BankAccount, FedexAccount, KazPostAccount };

export function withdrawMoney(accounts, amount) {
  accounts.forEach((account) => {
    if (account instanceof BankAccount || account instanceof KazPostAccount) {
      account.withdraw(amount);
    } else {
      console.error("Invalid account for withdrawal:", account);
    }
  });
}

export function sendLetterTo(accounts, recipient) {
  accounts.forEach((account) => {
    if (account instanceof FedexAccount || account instanceof KazPostAccount) {
      account.sendMail(recipient);
    } else {
      console.error("Invalid account for sending mail:", account);
    }
  });
}
