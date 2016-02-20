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
    
    describe("stringy", function () {
        beforeEach(function () {
            sinon.spy(console, 'log');
        });

        afterEach(function () {
            console.log.restore();
        });
        var assignment = require('../in-class-exercises/module-one/stringy');
        describe("length", function () {
            it('should return the length of the input String', function() {
                expect(assignment.length('hello')).to.equal(5);
                expect(assignment.length('you')).to.equal(3);
            });
        });
        
        describe("toLowerCase", function () {
            it('should return a lowercase version of the input String', function() {
                expect(assignment.toLowerCase('HELLO')).to.equal('hello');
            });
        });
        
        describe("toUpperCase", function () {
            it('should return an uppercase version of the input String', function() {
                expect(assignment.toUpperCase('hello')).to.equal('HELLO');
            });
        });
        
        describe("toDashCase", function () {
            it('should return a dash-cased version of the input String', function() {
                expect(assignment.toDashCase('Hello World')).to.equal('hello-world');
                expect(assignment.toDashCase('Should Work With Many Words')).to.equal('should-work-with-many-words');
            });
        });
        
        describe("beginsWith", function () {
            it('should return true if the input String begins with the input character, false otherwise', function() {
                expect(assignment.beginsWith('Hello World', 'h')).to.be.true;
                expect(assignment.beginsWith('Hello World', 'H')).to.be.true;
                expect(assignment.beginsWith('Hello World', 'a')).to.be.false;
            });
        });
        
        describe("endsWith", function () {
            it('should return true if the input String ends with the input character, false otherwise', function() {
                expect(assignment.endsWith('Hello World', 'd')).to.be.true;
                expect(assignment.endsWith('Hello World', 'D')).to.be.true;
                expect(assignment.endsWith('Hello World', 'a')).to.be.false;
            });
        });
        
        describe("concat`", function () {
            it('should return the two input Strings concatenated', function() {
                expect(assignment.concat('Hello ', 'World')).to.equal('Hello World');
            });
        });
        
        describe("join`", function () {
            it('should return all input Strings concatenated', function() {
                expect(assignment.join('Hello ', 'there, ', 'you ', 'prince!')).to.equal('Hello there, you prince!');
            });
        });
        
        describe("longest`", function () {
            it('should return the longest of two input Strings', function() {
                expect(assignment.longest('abc', 'z')).to.equal('abc');
                expect(assignment.longest('z', 'abc')).to.equal('abc');
            });
        });
        
        describe("sortAscending`", function () {
            it('should return 1 if stringOne is alphabetically higher than stringTwo', function() {
                expect(assignment.sortAscending('abc', 'acb')).to.equal(1);
            });
            it('should return -1 if stringOne is alphabetically lower than stringTwo', function() {
                expect(assignment.sortAscending('acb', 'abc')).to.equal(-1);
            });
            it('should return 0 if stringOne is alphabetically equivalent to stringTwo', function() {
                expect(assignment.sortAscending('abc', 'abc')).to.equal(0);
            });
        });
        
        describe("sortDescending`", function () {
            it('should return -1 if stringOne is alphabetically lower than stringTwo', function() {
                expect(assignment.sortDescending('abc', 'acb')).to.equal(-1);
            });
            it('should return 1 if stringOne is alphabetically higher than stringTwo', function() {
                expect(assignment.sortDescending('acb', 'abc')).to.equal(1);
            });
            it('should return 0 if stringOne is alphabetically equivalent to stringTwo', function() {
                expect(assignment.sortDescending('abc', 'abc')).to.equal(0);
            });
        });
    });
    
    describe("first-class-functions", function () {
        beforeEach(function () {
            sinon.spy(console, 'log');
        });

        afterEach(function () {
            console.log.restore();
        });
        var assignment = require('../in-class-exercises/module-one/first-class-functions');
        describe("createGreaterThanFilter`", function () {
            it('should, given a base threshold of type Number, return a Function that tests whether a Number value is greater than the base', function() {
                var greaterThan2 = assignment.createGreaterThanFilter(2);
                expect(greaterThan2).to.be.instanceof(Function);
                expect(greaterThan2(1)).to.be.false;
            });
        });
        
        describe("createGreaterThanFilter`", function () {
            it('should, given a base threshold of type String, return a Function that tests whether a String value is greater than the base', function() {
                var greaterThanB = assignment.createGreaterThanFilter('b');
                expect(greaterThanB).to.be.instanceof(Function);
                expect(greaterThanB('a')).to.be.false;
            });
        });
        
        describe("createLessThanFilter`", function () {
            it('should, given a base threshold of type Number, return a Function that tests whether a Number value is less than the base', function() {
                var lessThan2 = assignment.createLessThanFilter(2);
                expect(lessThan2).to.be.instanceof(Function);
                expect(lessThan2(1)).to.be.true;
            });
        });
        
        describe("createLessThanFilter`", function () {
            it('should, given a base threshold of type String, return a Function that tests whether a String value is less than the base', function() {
                var lessThanB = assignment.createLessThanFilter('b');
                expect(lessThanB).to.be.instanceof(Function);
                expect(lessThanB('a')).to.be.true;
            });
        });
        
        describe("createStartsWithFilter`", function () {
            it('should, given a character, return a Function that tests whether a String value starts with the character', function() {
                var startsWithC = assignment.createStartsWithFilter('C');
                expect(startsWithC).to.be.instanceof(Function);
                expect(startsWithC('C')).to.be.true;
                expect(startsWithC('d')).to.be.false;
            });
        });
        
        describe("createEndsWithFilter`", function () {
            it('should, given a character, return a Function that tests whether a String value ends with the character', function() {
                var endsWith_k = assignment.createEndsWithFilter('k');
                expect(endsWith_k).to.be.instanceof(Function);
                expect(endsWith_k('Dork')).to.be.true;
                expect(endsWith_k('Dorky')).to.be.false;
            });
        });
        
        describe("modifyStrings`", function () {
            it('should return a modified verion of the Strings array based on the modify Function', function() {
                expect(assignment.modifyStrings(['a', 'b', 'c'], function(string) { return string.toUpperCase(); })).to.eql(['A', 'B', 'C']);
            });
        });
        
        describe("allStringsPass`", function () {
            it('should apply the test Function to all Strings, return true if all Strings passed, false otherwise', function() {
                expect(assignment.allStringsPass(['aa', 'ab', 'abc'], assignment.createStartsWithFilter('a'))).to.true;
                expect(assignment.allStringsPass(['aa', 'ba', 'abc'], assignment.createStartsWithFilter('a'))).to.false;
                expect(assignment.allStringsPass(['aa', 'ab', 'abc'], assignment.createStartsWithFilter('b'))).to.false;
            });
        });
    });
    
    describe("contact-list", function () {
        var homework = require('../in-class-exercises/module-one/contact-list');
        it('should expose a Function called makeContact that returns an Object with structure: {id: \'1\', nameFirst: \'Max\', nameLast: \'Gaudin\'}', function () {
            expect(homework.makeContact('1', 'Max', 'Gaudin')).to.eql({
                id: '1',
                nameFirst: 'Max',
                nameLast: 'Gaudin'
            });
        });
        it('should expose a Function called makeContactList that returns an Object specialized for contact management', function () {
            var contacts = homework.makeContactList();
            expect(contacts).to.be.instanceof(Object);
        });
        it('should properly add a contact thru the addContact API', function () {
            var contacts = homework.makeContactList();
            contacts.addContact(homework.makeContact('1', 'Max', 'Gaudin'));
            expect(contacts.length()).to.equal(1);
        });
        it('should properly remove a contact thru the removeContact API', function () {
            var contacts = homework.makeContactList();
            contacts.addContact(homework.makeContact('1', 'Max', 'Gaudin'));
            expect(contacts.length()).to.equal(1);
            contacts.removeContact(contacts.find('Max Gaudin'));
            expect(contacts.length()).to.equal(0);
        });
        it('should properly find a contact by full name thru the find API', function () {
            var contacts = homework.makeContactList();
            contacts.addContact(homework.makeContact('1', 'Max', 'Gaudin'));
            expect(contacts.find('Max Gaudin')).to.eql({
                id: '1',
                nameFirst: 'Max',
                nameLast: 'Gaudin'
            });
            expect(contacts.find('John Fraboni')).to.equal(undefined);
        });
        it('BONUS: should have an all API that returns new-line separated String of all full-names of contacts', function() {
            var contacts = homework.makeContactList();
            contacts.addContact(homework.makeContact('1', 'Max', 'Gaudin'));
            contacts.addContact(homework.makeContact('2', 'John', 'Fraboni'));
            expect(contacts.all()).to.equal('Max Gaudin\nJohn Fraboni');
        });
    });
});
