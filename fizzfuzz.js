function ehDivisivelPor3(valor) {
  return valor % 3 == 0;
}

function ehDivisivelPor5(valor) {
  return valor % 5 == 0;
}

function defineFizzbuzz(numero) {
  if (numero == 0) {
    return numero;
  } else if (ehDivisivelPor3(numero) && ehDivisivelPor5(numero)) {
    return "FizzBuzz";
  } else if (ehDivisivelPor3(numero)) {
    return "Fizz";
  } else if (ehDivisivelPor5(numero)) {
    return "Buzz";
  } 

  return numero;
}

module.exports = defineFizzbuzz
