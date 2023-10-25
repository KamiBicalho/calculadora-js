let usuario = prompt('Qual o seu nome?');

function exibirNaTela(classe, mensagem) {
    let contexto = document.querySelector(classe);
    contexto.innerHTML = mensagem;
}

let saudacao = `Bem vindo ${usuario}!`;
exibirNaTela('.titulo', saudacao)

function resolverOperacoes() {
    let primeiroNumero = document.querySelector('.container__input__primeiro').value;
    let segundoNumero = document.querySelector('.container__input__segundo').value;

    const somar = (numero1 = 0, numero2 = 0) => parseInt(numero1) + parseInt(numero2);
    const subtrair = (numero1 = 0, numero2 = 0) => numero1 - numero2;
    const multiplicar = (numero1 = 0, numero2 = 1) => numero1 * numero2;
    const dividir = (numero1 = 0, numero2 = 1) => numero1 / numero2;

    exibirNaTela('.resultado__somar', `A soma é ${somar(primeiroNumero, segundoNumero)}.`)
    exibirNaTela('.resultado__subtrair', `A subtração é ${subtrair(primeiroNumero, segundoNumero)}.`)
    exibirNaTela('.resultado__multiplicar', `A multiplicação é ${multiplicar(primeiroNumero, segundoNumero)}.`)
    exibirNaTela('.resultado__dividir', `A divisão é ${dividir(primeiroNumero, segundoNumero)}.`)

}

