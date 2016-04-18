var
    _ = require('lodash'),
    expect = require('chai').expect,
    sinon = require('sinon');
    
describe("#loops", function () {
    beforeEach(function () {
        sinon.spy(console, 'log');
    });

    afterEach(function () {
        console.log.restore();
    });
    var assignment = require('../in-class-exercises/module-one/loops');
    var array = [1, 2 , 3];
    var object = {one: 'one', two: 'two', three: 'three'};
    describe("printArrayValues", function () {
        it('should call log with the values in the Array', function() {
            assignment.printArrayValues(array);
            expect(console.log.firstCall.calledWith(1)).to.be.true;
            expect(console.log.secondCall.calledWith(2)).to.be.true;
            expect(console.log.thirdCall.calledWith(3)).to.be.true;
        });
    });
    describe("printArrayValuesInReverse", function () {
        it('should call log with the values in the Array in reverse order', function() {
            assignment.printArrayValuesInReverse(array);
            expect(console.log.firstCall.calledWith(3)).to.be.true;
            expect(console.log.secondCall.calledWith(2)).to.be.true;
            expect(console.log.thirdCall.calledWith(1)).to.be.true;
        });
    });
    describe("printObjectValues", function () {
        it('should call log with the values in the Object', function() {
            assignment.printObjectValues(object);
            expect(console.log.firstCall.calledWith('one')).to.be.true;
            expect(console.log.secondCall.calledWith('two')).to.be.true;
            expect(console.log.thirdCall.calledWith('three')).to.be.true;
        });
    });
    describe("getObjectLength", function () {
        it('should return the number of key/value pairs in the Object', function() {
            expect(assignment.getObjectLength(object)).to.equal(3);
        });
    });
    describe("getObjectKeys", function () {
        it('should return an Array containing the Object keys', function() {
            expect(assignment.getObjectKeys(object)).to.eql(['one', 'two', 'three']);
        });
    });
    describe("printObjectValuesInReverse", function () {
        it('should call log with the values in the Object in reverse order', function() {
            assignment.printObjectValuesInReverse(object);
            expect(console.log.firstCall.calledWith('three')).to.be.true;
            expect(console.log.secondCall.calledWith('two')).to.be.true;
            expect(console.log.thirdCall.calledWith('one')).to.be.true;
        });
    });
});