var balance = 0;
module.exports = {
  canAfford: function(amount) {
    if (!this.isValidAmount(amount)) {
      errorMessage = "Invalid Input";
    }
    if (errorMessage) {
      throw new Error(errorMessage);
    }
    return amount <= balance;
  },

  decreaseBalance: function(amount) {
    // This method decreases the balance of the vending machine. If the balance amount is not
    // enough to cover the purchase, the method throws an error.
    var errorMessage;
    if (!this.canAfford(amount)) {
      errorMessage = "Insufficient balance";
    }
    if (errorMessage) {
      throw new Error(errorMessage);
    }
    balance -= amount;
  },

  getAmount: function(coinType) {
    // COINS:
    // [p]enny
    // [n]ickel
    // [d]ime
    // [q]uarter
    switch (coinType) {
      case "p":
        return 1;
      case "n":
        return 5;
      case "d":
        return 10;
      case "q":
        return 25;
      default:
        throw new Error("Unrecognized coin " + coinType);
    }
  },

  getBalance: function() {
    return balance;
  },
  increaseBalance: function(amount) {
    balance += amount;
  },

  insertCoin: function(coinType) {
    var value = this.getAmount(coinType);
    this.increaseBalance(value);
  },

  isValidAmount: function(amount) {
    if (amount === null) {
      return false;
    } else {
      return true;
    }
  },

  releaseChange: function() {
    var currentBalance = this.getBalance();
    this.decreaseBalance(currentBalance);
    return this.convertToChange(currentBalance);
  }
};
