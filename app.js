const maxRegadas = 3;
let regadas = 0;

const cartas = [
    "Falta muitas cartas pra você descobrir?? nn sei quantas vezes ja leu essa mas ela é um lembrete pra vc não desistir kkk, eu te amo meu bem, espero que goste da surpresa final ultra mega blaster 😃",
    "Sabe uma coisa legal? A parte que mais adoro quando faço projetos assim pra você, é ver sua reação quanto a eles sabe, eu adoro ver seu sorriso bobo quando olha pro projeto, me faz sentir que te fiz feliz com aquilo, que sempre foi o objetivo, eu amo muito você Ana, e esses projetos que eu faço, são uma forma de eu expressar isso, espero que esteja gostando de tudo, eu te amo muito 😘",
    "Se pudesse escolher flores pra representar o nosso relacionamento em geral acho que seriam as Tulipas e as Dálias. Geralmente as tulipas representam um amor perfeito, e da pra ser mais especifico kk, quanto mais escuro o vermelho da tulipa ela simboliza o quão verdadeiro é tal sentimento(A cor da nossa seria o mais escuro possivel hehehe). e as Dálias simbolizam o compromisso amor e admiração de uma pessoa por outra, e acho que essa simboliza bem oq eu sinto por ti, pois eu simplesmente sou fascinado por vc, nos seus olhos, seu cabelo, seu jeito de amar tudo é lindo e perfeito, Eu amo você ana, amo dmais mesmo",
    "Um pouco de filosofia agora hehe, eu acho que à um tempo atras nn estava com muitas expectativas de vida, eu não sei, eu tinha ideias doq eu queria fazer, mas nn sei explicar eu acho que, mesmo assim eu estava sem muitas expectativas, não conseguia ver muito oq faria daqui 1 ou 2 anos no sentido emocional, ou algo assim, mas, filosofia me ajudou bastante a me centrar nesse sentido, e, uma filosofia que quero e tento seguir no nosso relacionamento é o pensamento de 'Memento Mori', lembresse de que morrerá, pode parecer estranho, mas oq eu tiro desse penamento, é o fato de que a vida é tão curta, e eu tive tanta sorte de achar a melhor pessoa de todas tão cedo, e tenho que aproveitar, cada segundo, cada instante lembrando de que um dia pode acabar, sei que é morbido, mas me ajuda tanto a entender e saber o quanto te amo sabe, enfim eu te amo, e quero agradecer por esses 7 meses novamente, obrigado por estar cmg 🌹",
    "Da mesma forma que você tá plantando e cuidando dessa flor, queria que soubesse que vc plantou um sentimento incrivel em mim, um que eu nunca havia sentido, e que essa florzinha simboliza o nosso amor, e que eu vou fazer de tudo pra cuidar dela tbm, e preservar pra sempre e sempre 💕",
    "Papoula, flor usada pra produzir opio, subistancia com efeitos alucinogenos. Sabe pq eu te comparo tanto com essa flor? Simples, pois o efeito que você me causa quando estou contigo é até mais forte do que o dessa flor, estar com vc me traz uma calma e uma paz surreal, e estou tão feliz de poder sentir isso e estar com você por todo esses meses, eu amo você, amo de mais 🌹",
    "Ana, ja perguntou a origem do seu nome? Resumindo é uma pessoa bondosa, compassiva. Não poderia combinar mais contigo, nesses 7 meses, pude ver com meus proprios olhos que essa é a mais pura verdade, pois nunca conheci ngm mais especial e bondosa que você ❤"
];

const cartasDescobertas = new Set();

function atualizarImagem() {
    const imagem = document.getElementById("arvore");

    if (regadas === 0) {
        imagem.src = "fase1.png";
    } else if (regadas === 1 || regadas === 2) {
        imagem.src = "fase2.png";
    } else if (regadas >= maxRegadas) {
        imagem.src = "fase3.png";
        mostrarCarta();
    }
}

function regar() {
    if (regadas >= maxRegadas) return;
    regadas++;
    atualizarImagem();
    document.getElementById("status").textContent = `Regadas: ${regadas}/${maxRegadas}`;
}

function mostrarCarta() {
    const cartaDiv = document.getElementById("carta");
    const mensagem = cartas[Math.floor(Math.random() * cartas.length)];

    cartasDescobertas.add(mensagem);
    atualizarProgresso();

    document.getElementById("mensagemCarta").textContent = mensagem;
    cartaDiv.classList.remove("hidden");

    if (cartasDescobertas.size === cartas.length) {
        document.getElementById("surpresa").classList.remove("hidden");
    }
}

function atualizarProgresso() {
    const progresso = document.getElementById("progressoCartas");
    progresso.textContent = `Cartas descobertas: ${cartasDescobertas.size}/${cartas.length}`;
}

function reiniciar() {
    regadas = 0;
    document.getElementById("status").textContent = "";
    document.getElementById("carta").classList.add("hidden");
    atualizarImagem();
}

// Inicialização
atualizarImagem();
atualizarProgresso();