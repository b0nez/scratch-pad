var
    _ = require('lodash'),
    expect = require('chai').expect,
    sinon = require('sinon');


describe('in-class-exercises', function () {
    describe("greeter-app", function () {
        beforeEach(function () {
            sinon.spy(console, 'log');
        });

        afterEach(function () {
            console.log.restore();
        });
        var assignment = require('../in-class-exercises/module-one/greeter-app');
        it('should print Good Morning! if hour is between 0 and 11', function () {
            assignment.greeter(11);
            expect(console.log.calledWith('Good Morning!')).to.be.true;
        });
        it('should print Good Afternoon! if hour is between 12 and 16', function () {
            assignment.greeter(12);
            expect(console.log.firstCall.calledWith('Good Afternoon!')).to.be.true;
            assignment.greeter(16);
            expect(console.log.secondCall.calledWith('Good Afternoon!')).to.be.true;
            assignment.greeter(17);
            expect(console.log.thirdCall.calledWith('Good Afternoon!')).to.be.false;
            
        });
        it('should print Good Evening! if hour is between 17 and 21', function () {
            assignment.greeter(17);
            expect(console.log.firstCall.calledWith('Good Evening!')).to.be.true;
            assignment.greeter(21);
            expect(console.log.secondCall.calledWith('Good Evening!')).to.be.true;
            assignment.greeter(22);
            expect(console.log.thirdCall.calledWith('Good Evening!')).to.be.false;
        });
        it('should print Good Night! if hour is between 22 and 23', function () {
            assignment.greeter(22);
            expect(console.log.firstCall.calledWith('Good Night!')).to.be.true;
            assignment.greeter(23);
            expect(console.log.secondCall.calledWith('Good Night!')).to.be.true;
            assignment.greeter(0);
            expect(console.log.thirdCall.calledWith('Good Night!')).to.be.false;
        });
    });
    
    describe("loops", function () {
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
    
    describe("type", function () {
        beforeEach(function () {
            sinon.spy(console, 'log');
        });

        afterEach(function () {
            console.log.restore();
        });
        var assignment = require('../in-class-exercises/module-one/type');
        describe("isArray", function () {
            it('should return true if given Array, otherwise false', function() {
                expect(assignment.isArray([])).to.be.true;
                expect(assignment.isArray({})).to.be.false;
                expect(assignment.isArray(new Date())).to.be.false;
                expect(assignment.isArray(1)).to.be.false;
                expect(assignment.isCollection(null)).to.be.false;
                expect(assignment.isArray('a')).to.be.false;
                expect(assignment.isArray(true)).to.be.false;
            });
        });
        
        describe("isObject", function () {
            it('should return true if given Object as collection, otherwise false', function() {
                expect(assignment.isObject({})).to.be.true;
                expect(assignment.isObject([])).to.be.false;
                expect(assignment.isObject(new Date())).to.be.false;
                expect(assignment.isObject(1)).to.be.false;
                expect(assignment.isCollection(null)).to.be.false;
                expect(assignment.isObject('a')).to.be.false;
                expect(assignment.isObject(true)).to.be.false;
            });
        });
        
        describe("isCollection", function () {
            it('should return true if given Array or Object as collection, otherwise false', function() {
                expect(assignment.isCollection({})).to.be.true;
                expect(assignment.isCollection([])).to.be.true;
                expect(assignment.isCollection(new Date())).to.be.false;
                expect(assignment.isCollection(1)).to.be.false;
                expect(assignment.isCollection(null)).to.be.false;
                expect(assignment.isCollection('a')).to.be.false;
                expect(assignment.isCollection(true)).to.be.false;
            });
        });
        
        describe('typeOf', function() {
        it('should return a String representing the type of the value provided', function() {
            expect(assignment.typeOf([])).to.equal('array');
            expect(assignment.typeOf('a')).to.equal('string');
            expect(assignment.typeOf(null)).to.equal('null');
            expect(assignment.typeOf(NaN)).to.equal('number');
            expect(assignment.typeOf(1)).to.equal('number');
            expect(assignment.typeOf(new Date())).to.equal('date');
            expect(assignment.typeOf(function () { })).to.equal('function');
        });
    });
    
    });
});
