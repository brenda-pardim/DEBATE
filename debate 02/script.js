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
                texto: "Conservação ambiental, conservando as florestas e evitar o desmatamnento",
                afirmacao: "Sim, está correto!"
            },
            {
                texto: "Desmatamento de árvores e espaços verdes",
                afirmacao: "Errado. Devemos conservar o ambiente"
            }
        ]
    },
    {
        enunciado: "Qual das duas alternativas a seguir está correta sob os impactos ambientais nos recursosmarinhos?",
        alternativas: [
            {
                texto: "A poluição do ar tem um impacto direto e significativo na acidificação dos oceanos, enquanto a poluição da água afeta diretamente a biodiversidade marinha",
                afirmacao: "Está correta, pois a poluição do ar e da água é bem prejudicial para ecossistema."
            },
            {
                texto: "As mudanças climáticas são causadas principlmente pela poluição da água e a poluição do ar não tem relação significativa com aquecimento global",
                afirmacao: "Embora prejudicial para os ecossistemas aquáticos, não é a principal causa das mudanças climáticas"
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
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
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
