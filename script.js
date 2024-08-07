const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual das seguintes alternativas é a mais eficaz para promover a sustentabilidade a longo prazo?",
        alternativas: [
            {
                texto: "Educação ambiental, conscientizando sobre práticas sustentáveis",
                afirmacao: "Muito bem, é isso mesmo!"
            },
            {
                texto: "Ignorar o desmatamento para priorizar o desenvolvimento econômico",
                afirmacao: "Não foi dessa vez. Devemos prevenir o desmatamento e não ignorá-lo"
            }
        ]
    },
    {
        enunciado: "Qual das alternativas abaixo que mais previne que ocorra as mudanças climáticas?",
        alternativas: [
            {
                texto: "Conservação ambiental, conservando as florestas e evitar o desmatamento",
                afirmacao: "Sim, está correto!"
            },
            {
                texto: "Desmatamento de árvores e espaços verdes",
                afirmacao: "Errado. Devemos conservar o ambiente"
            }
        ]
    },
    {
        enunciado: "Qual das duas alternativas a seguir está correta sob os impactos ambientais nos recursos marinhos?",
        alternativas: [
            {
                texto: "A poluição do ar tem um impacto direto e significativo na acidificação dos oceanos, enquanto a poluição da água afeta diretamente a biodiversidade marinha",
                afirmacao: "Está correta, pois a poluição do ar e da água é bem prejudicial para ecossistema."
            },
            {
                texto: "As mudanças climáticas são causadas principalmente pela poluição da água e a poluição do ar não tem relação significativa com aquecimento global",
                afirmacao: "Embora prejudicial para os ecossistemas aquáticos, não é a principal causa das mudanças climáticas"
            }
        ]
    },
    {
        enunciado: "Qual é a principal vantagem da energia solar em termos de impacto ambiental?",
        alternativas: [
            {
                texto: "Redução significativa das emissões de gases de efeito estufa.",
                afirmacao: "Muito bem! É isso mesmo."
            },
            {
                texto: "Redução do uso de àgua em processos industriais.",
                afirmacao: "Está errada. A energia solar não é conhecida por reduzir o uso da àgua."
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
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
