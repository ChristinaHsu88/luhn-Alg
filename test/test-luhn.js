var assert = require("chai").assert;
var check = require("../lib/luhn");

console.log(check);

describe("check numbers", function() {
  it("should return true if the card numbers are valid", function() {
    var number = "79927398713";
    var result = check(number);
    assert.isTrue(result);
  });

  it("should return false if card numbers are NOT valid", function() {
    var number = "79927398712";
    assert.isFalse(check(number));
  });

});

