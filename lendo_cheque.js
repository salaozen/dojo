function lendoCheque(valorPorExtenso) {
const numeroPorExtenso = valorPorExtenso.substring(0, valorPorExtenso.indexOf(" ")) //Um real
if(numeroPorExtenso == "Um") return 1.0
if(numeroPorExtenso == "Dois") return 2.0
if(numeroPorExtenso == "Três") return 3.0
if(numeroPorExtenso == "Quatro") return 4.0
if(numeroPorExtenso == "Cinco") return 5.0
if(numeroPorExtenso == "Seis") return 6.0
if(numeroPorExtenso == "Sete") return 7.0
if(numeroPorExtenso == "Oito") return 8.0
if(numeroPorExtenso == "Nove") return 9.0
if(numeroPorExtenso == "Dez") return 10.0
}
module.exports = lendoCheque
