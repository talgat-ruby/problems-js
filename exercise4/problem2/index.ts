class Name {
    private _firstName: string;
    private _lastName: string;
  
    constructor(firstName: string, lastName: string) {
      this._firstName = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
      this._lastName = lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();
    }
  
    get firstName(): string {
      return this._firstName;
    }
  
    get lastName(): string {
      return this._lastName;
    }
  
    get fullName(): string {
      return `${this._firstName} ${this._lastName}`;
    }
  
    get initials(): string {
      return `${this._firstName[0]}.${this._lastName[0]}`;
    }
  }

export default Name;
