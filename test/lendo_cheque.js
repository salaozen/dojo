const lerCheque = require('../lendo_cheque'),
      chai = require('chai');

describe('lerCheque', function() {
  it ('Deve ler números inteiros até 10', function() {

    const mapa = {
      "Um real": 1.0, 
      "Dois reais": 2.0,
      "Três reais": 3.0,
      "Quatro reais": 4.0,
      "Cinco reais": 5.0,
      "Seis reais": 6.0,
      "Sete reais": 7.0,
      "Oito reais": 8.0,
      "Nove reais": 9.0,
      "Dez reais": 10.0,
      "Onze reais": 11.0,
      "Doze reais": 12.0,
      "Treze reais": 13.0,
      "Quatorze reais": 14.0,
      "Quinze reais": 15.0,
      "Dezesseis reais": 16.0,
      "Dezessete reais": 17.0,
      "Dezoito reais": 18.0,
      "Dezenove reais": 19.0,
    }
    Object.entries(mapa).forEach(([valorPorExtenso, valorNumerico])=> {
      chai.expect(lerCheque(valorPorExtenso)).to.equal(valorNumerico);
    });
  

  }) 
})