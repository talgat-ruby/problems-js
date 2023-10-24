export class BankAccount {
  #balance = 0;

  withdraw(amount: number): number {
    if (amount <= 0 || amount > this.#balance) {
      return -1;
    } else {
      this.#balance -= amount;
      return this.#balance;
    }
  }
}

export class FedexAccount {
  sendMail(recipient: string): void {
    console.log(`Sending mail to ${recipient} via FedEx.`);
  }

  receiveMail(sender: string): void {
    console.log(`Received mail from ${sender} via FedEx.`);
  }
}

export class KazPostAccount extends BankAccount {
  sendMail(recipient: string): void {
    console.log(`Sending mail to ${recipient} via KazPost.`);
  }

  receiveMail(sender: string): void {
    console.log(`Received mail from ${sender} via KazPost.`);
  }
}

export function withdrawMoney(accounts: (BankAccount | KazPostAccount)[], amount: number): void {
  for (const account of accounts) {
    if (account instanceof BankAccount) {
      account.withdraw(amount);
    }
  }
}

export function sendLetterTo(accounts: (FedexAccount | KazPostAccount)[], recipient: string): void {
  for (const account of accounts) {
    if (account instanceof FedexAccount) {
      account.sendMail(recipient);
    }
  }
}