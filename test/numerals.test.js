const expect = require('chai').expect;
const numeral = require('../numerals');

describe('numerals.js', () => {

  it('prints an English word that describes an integer', () => {
    expect(numeral(0)).to.equal('Zero');
    expect(numeral(1)).to.equal('One');
    expect(numeral(3)).to.equal('Three');
    expect(numeral(12)).to.equal('Twelve');
    expect(numeral(-12)).to.equal('Negative Twelve');
    expect(numeral(20)).to.equal('Twenty');
    expect(numeral(42)).to.equal('Forty Two');
    expect(numeral(79)).to.equal('Seventy Nine');
    expect(numeral(100)).to.equal('One Hundred');
    expect(numeral(102)).to.equal('One Hundred Two');
    expect(numeral(116)).to.equal('One Hundred Sixteen');
    expect(numeral(130)).to.equal('One Hundred Thirty');
    expect(numeral(567)).to.equal('Five Hundred Sixty Seven');
    expect(numeral(814)).to.equal('Eight Hundred Fourteen');
    expect(numeral(-814)).to.equal('Negative Eight Hundred Fourteen');
    expect(numeral(1000)).to.equal('One Thousand');
    expect(numeral(1002)).to.equal('One Thousand Two');
    expect(numeral(1019)).to.equal('One Thousand Nineteen');
    expect(numeral(2020)).to.equal('Two Thousand Twenty');
    expect(numeral(3100)).to.equal('Three Thousand One Hundred');
    expect(numeral(4444)).to.equal('Four Thousand Four Hundred Forty Four');
    expect(numeral(40000)).to.equal('Forty Thousand');
    expect(numeral(502000)).to.equal('Five Hundred Two Thousand');
    expect(numeral(-502000)).to.equal('Negative Five Hundred Two Thousand');
    expect(numeral(62000000)).to.equal('Sixty Two Million');
    expect(numeral(162000000)).to.equal('One Hundred Sixty Two Million');
    expect(numeral(762344000)).to.equal(
      'Seven Hundred Sixty Two Million Three Hundred Forty Four Thousand'
    );
    expect(numeral(762344005)).to.equal(
      'Seven Hundred Sixty Two Million Three Hundred Forty Four Thousand Five'
    );
    expect(numeral(300100234)).to.equal(
      'Three Hundred Million One Hundred Thousand Two Hundred Thirty Four'
    );
    expect(numeral(300000234)).to.equal(
      'Three Hundred Million Two Hundred Thirty Four'
    );
    expect(numeral(15000000000000)).to.equal('Fifteen Trillion');
    expect(numeral(15000000000001)).to.equal('Fifteen Trillion One');
    expect(numeral(5000000000000301)).to.equal(
      'Five Quadrillion Three Hundred One'
    );
  });

});
