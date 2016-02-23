const expect = require('chai').expect;
const numberWord = require('../numberWord');

describe('numberWord.js', () => {

  it('prints an English phrase that describes a positive integer', () => {
    expect(numberWord(0)).to.equal('Zero');
    expect(numberWord(1)).to.equal('One');
    expect(numberWord(3)).to.equal('Three');
    expect(numberWord(12)).to.equal('Twelve');
    expect(numberWord(-12)).to.equal('Negative Twelve');
    expect(numberWord(20)).to.equal('Twenty');
    expect(numberWord(42)).to.equal('Forty Two');
    expect(numberWord(79)).to.equal('Seventy Nine');
    expect(numberWord(100)).to.equal('One Hundred');
    expect(numberWord(102)).to.equal('One Hundred Two');
    expect(numberWord(116)).to.equal('One Hundred Sixteen');
    expect(numberWord(130)).to.equal('One Hundred Thirty');
    expect(numberWord(567)).to.equal('Five Hundred Sixty Seven');
    expect(numberWord(814)).to.equal('Eight Hundred Fourteen');
    expect(numberWord(-814)).to.equal('Negative Eight Hundred Fourteen');
    expect(numberWord(1000)).to.equal('One Thousand');
    expect(numberWord(1002)).to.equal('One Thousand Two');
    expect(numberWord(1019)).to.equal('One Thousand Nineteen');
    expect(numberWord(2020)).to.equal('Two Thousand Twenty');
    expect(numberWord(3100)).to.equal('Three Thousand One Hundred');
    expect(numberWord(4444)).to.equal('Four Thousand Four Hundred Forty Four');
    expect(numberWord(40000)).to.equal('Forty Thousand');
    expect(numberWord(502000)).to.equal('Five Hundred Two Thousand');
    expect(numberWord(-502000)).to.equal('Negative Five Hundred Two Thousand');
    expect(numberWord(62000000)).to.equal('Sixty Two Million');
    expect(numberWord(162000000)).to.equal('One Hundred Sixty Two Million');
    expect(numberWord(762344000)).to.equal(
      'Seven Hundred Sixty Two Million Three Hundred Forty Four Thousand'
    );
    expect(numberWord(762344005)).to.equal(
      'Seven Hundred Sixty Two Million Three Hundred Forty Four Thousand Five'
    );
    expect(numberWord(300100234)).to.equal(
      'Three Hundred Million One Hundred Thousand Two Hundred Thirty Four'
    );
    expect(numberWord(300000234)).to.equal(
      'Three Hundred Million Two Hundred Thirty Four'
    );
    expect(numberWord(15000000000000)).to.equal('Fifteen Trillion');
    expect(numberWord(15000000000001)).to.equal('Fifteen Trillion One');
    expect(numberWord(5000000000000301)).to.equal(
      'Five Quadrillion Three Hundred One'
    );
  });

});
