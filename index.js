const defineFizzbuzz = require('./fizzbuzz');
for(let numero = 1; numero <= 100; numero++) {
  const valor = defineFizzbuzz(numero)
  console.log(valor)
}
