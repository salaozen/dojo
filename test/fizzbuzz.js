const defineFizzbuzz = require('../fizzbuzz'),
      chai = require('chai');

describe('fizzbuzz', function() {
  it ('quando informo um numero qualquer retorna o numero', function() {
    var numero = defineFizzbuzz(0);
    chai.expect(numero).to.equal(0);

    numero = defineFizzbuzz(7);
    chai.expect(numero).to.equal(7);

    numero = defineFizzbuzz(26);
    chai.expect(numero).to.equal(26);
  });

  it('quando o numero eh divisivel por 3 retorna Fizz', function() {
    var numero = defineFizzbuzz(3);

    chai.expect(numero).to.equal("Fizz");
  });

  it('quando o numero eh divisivel por 5 retorna Buzz', function() {
    var numero = defineFizzbuzz(5);

    chai.expect(numero).to.equal("Buzz");
  });

  it('quando o numero eh divisivel por 3 e 5 retorna FizzBuzz', function() {
    var numero = defineFizzbuzz(60);

    chai.expect(numero).to.equal("FizzBuzz");
  });
});
