  class SmartCalculator {
    constructor(initialValue) {
      this.value = initialValue;
      this.operations = [];
      this.operations.push(this.value);
    }

    add(number) {
      this.operations.push("+");
      this.operations.push(number);
      return this;
    }

    subtract(number) {
      this.operations.push("-");
      this.operations.push(number);
      return this;
    }

    multiply(number) {
      this.operations.push("*");
      this.operations.push(number);
      return this;
    }

    devide(number) {
      this.operations.push("/");
      this.operations.push(number);
      return this;
    }

    pow(number) {
      this.operations.push("^");
      this.operations.push(number);
      return this;
    }
    toString() {
        for (let i = this.operations.length - 1; i > 0; i--)
            if (this.operations[i] == "^") {
              this.operations.splice(i - 1, 3, Math.pow(this.operations[i - 1], this.operations[i + 1]));
              i++;
            }
        for (let i = 0; i < this.operations.length; i++) {
            if (this.operations[i] == "*") {
              this.operations.splice(i - 1, 3, this.operations[i - 1] * this.operations[i + 1]);
              i--;
            }
            if (this.operations[i] == "/") {
              this.operations.splice(i - 1, 3, this.operations[i - 1] / this.operations[i + 1]);
              i--;
            }
        }
        for (let i = 0; i < this.operations.length; i++) {
            if (this.operations[i] == "+") {
              this.operations.splice(i - 1, 3, this.operations[i - 1] + this.operations[i + 1]);
              i--;
            }
            if (this.operations[i] == "-") {
              this.operations.splice(i - 1, 3, this.operations[i - 1] - this.operations[i + 1]);
              i--;
            }
        }
        return this.operations[0];
    }
  }

module.exports = SmartCalculator;
