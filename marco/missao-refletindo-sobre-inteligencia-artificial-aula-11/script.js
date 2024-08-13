const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você esta conversando com seus amigo sobre carros, e um te questiona: -Você prefere carro sedan ou camioneta?",
        alternativas: [
            {
                texto: "Camionetas!",
                afirmacao: "Elas são mais versatei e seguras."
            },
            {
                texto: "Carros Sedan",
                afirmacao: "Eles são mais cofortáveis"
            }
        ]
    },
    {
        enunciado: "Se você ganhasse hoje 100.000 reais. O que você faria, compraria uma S10 ou um Astra para projetinho?",
        alternativas: [
            {
                texto: "Compraria a s10",
                afirmacao: "Sará a melhor opção para mim, pois nescessito de uma camioneta para ir para o sítio."
            },
            {
                texto: "Compraria um Astra e montaria um projetinho.",
                afirmacao: "Faria um projetinho no astra, deixando-o envenenado e chamando a antenção de todos."
            }
        ]
    },
    {
        enunciado: "O que você fazeria primeiro com o carro comprado?",
        alternativas: [
            {
                texto: "Melhoraria os amortecedores da S10",
                afirmacao: "na minha aquisição a s10 estava com os amortecedores quebrados, vou ter que arrumá-los."
            },
            {
                texto: "Arrumaria a parte externa o Astra!",
                afirmacao: "Na compra, o astra estava com a pintura desgastada e sem insufilme. Por isso vou repinta-lo e lacrar ele no G5 ."
            }
        ]
    },
    {
        enunciado: "Você terminou de arrumar o seu carro, e agora?",
        alternativas: [
            {
                texto: "Vou fazer um rally com a S10.",
                afirmacao: "Fazer um rally com a S10 para testar os amortecedores.."
            },
            {
                texto: "Passar na avenida com o Astra!",
                afirmacao: "Passar com o astrão causando na avenida lotada chamando a atenção de todo mundo!"
            }
        ]
    },
    {
        enunciado: "A policia se icomodou com sua presença de carro, oque fazer? ",
        alternativas: [
            {
                texto: "fugir para o meio do pasto com a s10",
                afirmacao: "o homi quiseram te prender por estar fazendo rally, mas você conseguiu fugir para dentro do pasto"
            },
            {
                texto: "Dar fuga com o astrão envenenado.",
                afirmacao: "Os homi n gostou de você causando na avenida, então vieram atrás, mas você conseguiu meter uma fuga com o Atrão. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Após...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
