let usuario = prompt('Qual o seu nome?');

function exibirNaTela(classe, mensagem) {
    let contexto = document.querySelector(classe);
    contexto.innerHTML = mensagem;
}

if (usuario == null) {
    usuario = 'usuário'
}

let saudacao = `Bem vindo ${usuario}!`;
exibirNaTela('.titulo', saudacao)

function resolverOperacoes() {
    let primeiroNumero = document.querySelector('.container__input__primeiro').value;
    let segundoNumero = document.querySelector('.container__input__segundo').value;

    primeiroNumero = isNaN(parseInt(primeiroNumero)) ? 0 : primeiroNumero;
    segundoNumero = isNaN(parseInt(segundoNumero)) ? 0 : segundoNumero;

    exibirNaTela('.resultado__somar', `A soma é ${somar(primeiroNumero, segundoNumero)}.`)
    
    let resultadoSubtracao = subtrair(primeiroNumero, segundoNumero);
    exibirNaTela('.resultado__subtrair', `A subtração é ${resultadoSubtracao}.`)
    if (resultadoSubtracao < 0) {
        document.getElementById("subtrair").style.color = "var(--cor-botoes)";
    } else {
        document.getElementById("subtrair").style.color = "var(--cor-texto)";
    }

    exibirNaTela('.resultado__multiplicar', `A multiplicação é ${multiplicar(primeiroNumero, segundoNumero)}.`)

    let mensagemDivisao = `A divisão é ${dividir(primeiroNumero, segundoNumero)}.`;
    if (segundoNumero == 0) {
        mensagemDivisao = `Não é possível dividir por zero!`;
        document.getElementById("dividir").style.color = "var(--cor-botoes)";
        document.getElementById("dividir").style.fontWeight = "700";
    } else {
        document.getElementById("dividir").style.color = "var(--cor-texto)";
        document.getElementById("dividir").style.fontWeight = "400";
    }
    exibirNaTela('.resultado__dividir', mensagemDivisao);

}

const somar = (numero1, numero2) => parseInt(numero1) + parseInt(numero2);
const subtrair = (numero1, numero2) => numero1 - numero2;
const multiplicar = (numero1, numero2) => numero1 * numero2;
const dividir = (numero1, numero2) => numero1 / numero2;