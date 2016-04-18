var
    _ = require('lodash'),
    expect = require('chai').expect,
    sinon = require('sinon');

describe("my-first-pull-request", function () {
    beforeEach(function () {
        sinon.spy(console, 'log');
    });

    afterEach(function () {
        console.log.restore();
    });
    var assignment = require('../../../in-class-exercises/module-one/my-first-pull-request');
    
    describe("print", function () {
        it('should log the given value', function() {
            assignment.print('Operation Spark');
            expect(console.log.firstCall.calledWith('Operation Spark')).to.be.true;
        });
    });
});
