const dados = require("../data/dados");
let arrayDeeventos = dados.arrayDeeventos;

function buscarEvento(ano) {
  ano = Number(ano);
  let eventoEncontrado = arrayDeeventos.filter((evento) => evento.ano === ano);
  return eventoEncontrado;
}

function validarAno(ano) {
  if (isNaN(ano)) {
    return false;
  } else {
    return true;
  }
}
exports.validarAno = validarAno;
exports.buscarEvento = buscarEvento;
