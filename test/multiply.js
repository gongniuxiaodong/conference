var Multiply = artifacts.require("./Multiply.sol");
contract('Multiply',function (accounts) {
    it("calculate the value 7*7",function () {
        return Multiply.deployed().then(function (instance) {
            return instance.multiply.call(7);
        }).then(function (result) {
            assert.equal(result,49,"10000 was not in the first account");
        });
    });
});