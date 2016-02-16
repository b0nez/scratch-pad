var
    expect = require('chai').expect,
    sinon = require('sinon');


describe('module one homework', function () {
    describe("one : contacts", function () {
        var homework = require('../homework/module-one/one-contact-list');
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

    describe("two : fizzBuzz", function () {
        beforeEach(function () {
            sinon.spy(console, 'log');
        });

        afterEach(function () {
            console.log.restore();
        });
        var homework = require('../homework/module-one/two-fizz-buzz');
        it('should print to stdin the correct results of the fizz buzz exercise', function () {
            homework.fizzBuzz();
            fizzBuzzConsoleCalls.forEach(function (value) {
                expect(console.log.calledWith(value)).to.be.true;
            });
        });
    });

    describe("three : range", function () {
        var homework = require('../homework/module-one/three-range');
        it('should return a range between the two input integers', function () {
            expect(homework.range(1, 5)).to.eql([1, 2, 3, 4, 5]);
        });
        it('should return a reversed range between the two input integers, if the start input is greater than the end input', function () {
            expect(homework.range(5, 1)).to.eql([5, 4, 3, 2, 1]);
        });
    });

    describe("four : reverseString", function () {
        var homework = require('../homework/module-one/four-reverse-string');
        it('should return the input String, reversed', function () {
            expect(homework.reverseString('hello')).to.equal('olleh');
        });
    });

});

var fizzBuzzConsoleCalls = [
    1,
    2,
    'Fizz',
    4,
    'Buzz',
    'Fizz',
    7,
    8,
    'Fizz',
    'Buzz',
    11,
    'Fizz',
    13,
    14,
    'FizzBuzz',
    16,
    17,
    'Fizz',
    19,
    'Buzz',
    'Fizz',
    22,
    23,
    'Fizz',
    'Buzz',
    26,
    'Fizz',
    28,
    29,
    'FizzBuzz',
    31,
    32,
    'Fizz',
    34,
    'Buzz',
    'Fizz',
    37,
    38,
    'Fizz',
    'Buzz',
    41,
    'Fizz',
    43,
    44,
    'FizzBuzz',
    46,
    47,
    'Fizz',
    49,
    'Buzz',
    'Fizz',
    52,
    53,
    'Fizz',
    'Buzz',
    56,
    'Fizz',
    58,
    59,
    'FizzBuzz',
    61,
    62,
    'Fizz',
    64,
    'Buzz',
    'Fizz',
    67,
    68,
    'Fizz',
    'Buzz',
    71,
    'Fizz',
    73,
    74,
    'FizzBuzz',
    76,
    77,
    'Fizz',
    79,
    'Buzz',
    'Fizz',
    82,
    83,
    'Fizz',
    'Buzz',
    86,
    'Fizz',
    88,
    89,
    'FizzBuzz',
    91,
    92,
    'Fizz',
    94,
    'Buzz',
    'Fizz',
    97,
    98,
    'Fizz',
    'Buzz'];