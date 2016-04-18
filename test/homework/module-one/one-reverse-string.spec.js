var
    expect = require('chai').expect;

describe("reverseString", function () {
    var homework = require('../../../homework/module-one/one-reverse-string');
    it('should return the input String, reversed', function () {
        expect(homework.reverseString('hello')).to.equal('olleh');
    });
});