const expect = require('chai').expect;

describe('chai expect demo', function() {
    it('expect equal', function() {
        expect(1+1).to.equal(2);
        expect(1+1).not.equal(3);
    });
});