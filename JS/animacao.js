const primeiraDiv = document.querySelector('#explicacaoUm');
const segundaDiv = document.querySelector('#explicacaoDois');
const clique = document.querySelector('#exemplo-clique');
const modalAtivo = document.querySelector('#modal');

window.addEventListener('scroll', () => {

    let valor = parseInt(100 * document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight))
    if (Number(valor) > 5) {
        primeiraDiv.style.visibility = 'visible';
        primeiraDiv.classList.add('animacao');
    }
    
    if (Number(valor) > 23) {
        segundaDiv.style.visibility = 'visible';
        segundaDiv.classList.add('animacao');
        clique.classList.add('clique-animado');
    }

    if (Number(valor) < 35 ) {
        modalAtivo.style.opacity = 0;
        modalAtivo.style.zIndex = -1;
    }
})