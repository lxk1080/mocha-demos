var expect = chai.expect;

describe('加法函数的测试', function() {
    it('1加1应该等于2', function() {
        expect(add(1, 1)).to.be.equal(2);
    });

    it('任何数加0等于自身', function() {
        expect(add(1, 0)).to.be.equal(1);
        expect(add(0, 0)).to.be.equal(0);
    });
});
