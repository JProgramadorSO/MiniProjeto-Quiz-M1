
const quiz = [
    {
        pergunta: "A tag <head> é usada para definir o conteúdo principal de uma página.",
        resposta: false
    },
    {
        pergunta: "O seletor universal * seleciona todos os elementos em uma página.",
        resposta: true

    },

    {
        pergunta: "A função console.log() é usada para imprimir mensagens no console do navegador.",
        resposta: true

    },

    {
        pergunta: "A tag <main> é usada para representar o conteúdo principal de um documento HTML.",
        resposta: true

    },

    {
        pergunta: "A tag <article> é usada para representar um conteúdo independente que pode ser distribuído e reutilizado.",
        resposta: true

    },

    {
        pergunta: " A propriedade margin é usada para definir o espaçamento interno de um elemento. ",
        resposta: false

    },

    {
        pergunta: "A propriedade position: absolute; posiciona um elemento em relação ao seu contêiner pai.",
        resposta: false

    },

    {
        pergunta: "O método array.pop() remove o último elemento de um array.",
        resposta: true

    },

    {
        pergunta: "A tag <figure> é usada para incorporar conteúdo multimídia, como imagens, vídeos ou gráficos.",
        resposta: false

    },

    {
        pergunta: "A propriedade border-radius é usada para criar bordas arredondadas em elementos.",
        resposta: true

    },

    {
        pergunta: "A propriedade text-align é usada apenas para alinhar o texto horizontalmente, não afetando o alinhamento vertical.",
        resposta: false

    },
    // Adicione mais perguntas conforme necessário
];

let perguntaAtual = 0;

function exibirPergunta() {
    while (perguntaAtual < quiz.length) {
        const respostaUsuario = prompt(quiz[perguntaAtual].pergunta + "\nDigite 'verdadeiro' ou 'falso':").toLowerCase();

        if (respostaUsuario === 'verdadeiro' || respostaUsuario === 'falso') {
            const resposta = respostaUsuario === 'verdadeiro';
            verificarResposta(resposta);
            break;
        } else {
            alert("Por favor, digite 'verdadeiro' ou 'falso'.");
        }
    }

    if (perguntaAtual === quiz.length) {
        // Fim do quiz
        alert("Quiz Concluído!");
    }
}

function verificarResposta(resposta) {
    if (resposta === quiz[perguntaAtual].resposta) {
        // Resposta correta
        alert("Resposta Correta!");
    } else {
        // Resposta incorreta
        alert("Resposta Incorreta!");
        window.location.href = "ohnao.html";
        return; // Para evitar que o código continue após o redirecionamento
    }

    // Verifica se todas as perguntas foram respondidas
    if (perguntaAtual === quiz.length - 1) {
        // Todas as perguntas foram respondidas corretamente, redireciona para 'Parabens'
        alert("Parabéns! Todas as perguntas foram respondidas corretamente. ");
        window.location.href = "parabens.html";
    } else {
        // Passa para a próxima pergunta
        perguntaAtual++;
        exibirPergunta();
    }
}

// Inicializa a exibição da primeira pergunta
exibirPergunta();