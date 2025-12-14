//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do número secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';
let numeroAleatorio = gerarNumeroAleatorio();

function exibirTextoNaTela(tag) {
    let campo = document.quertSelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');

function verificarChute() {
    console.log(numeroSecreto);
}

function gerar  gerarNumeroAleatorio() {
    return parseInt(Math.random() * 100 + 1);
}