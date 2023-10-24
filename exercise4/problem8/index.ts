class Calculator {
    constructor(initialValue) {
      this.value = initialValue;
    }
  
    add(num) {
      this.value += num;
      return this;
    }
  
    subtract(num) {
      this.value -= num;
      return this;
    }
  
    divide(num) {
      this.value /= num;
      return this;
    }
  
    multiply(num) {
      this.value *= num;
      return this;
    }
  
    logResult() {
      console.log(this.value);
      return this;
    }
  }
  
  export default Calculator;
