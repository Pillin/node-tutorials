var balanceManager = require("./balanceManager");
var productInventory = require("./productInventory");

module.exports = {
  ...balanceManager,
  ...productInventory,
  vendProduct: function(productId) {
    var product = productInventory.getProduct(productId);
    balanceManager.decreaseBalance(product.price);
    return product;
  }
};
