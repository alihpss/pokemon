const primeiraDiv = document.querySelector('#explicacaoUm');
const segundaDiv = document.querySelector('#explicacaoDois');
const clique = document.querySelector('#exemplo-clique');
const modalAtivo = document.querySelector('#modal');

window.addEventListener('scroll', () => {

    let valor = parseInt(100 * document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight))
    if (primeiraDiv.classList[0] == 'animacao') {
    } else if (Number(valor) > 5) {
        primeiraDiv.style.visibility = 'visible';
        primeiraDiv.classList.add('animacao');
    }
    
    if (segundaDiv.classList[0] == 'animacao') {
        
    } else if (Number(valor) > 23) {
        segundaDiv.style.visibility = 'visible';
        segundaDiv.classList.add('animacao');
        clique.classList.add('clique-animado');
    }

    if (Number(valor) < 35 ) {
        modalAtivo.style.opacity = 0;
        modalAtivo.style.zIndex = -1;
    }
});

const botaoMenu = document.querySelector('#botao-menu')
const lista = document.querySelector('.lista'); 
botaoMenu.addEventListener('click' , () => {

    if (lista.style.overFlow == 'visible') {
        lista.style.overFlow = 'invisible'
        lista.style.height = '0rem'

        return
    }

    lista.style.overFlow = 'visible'
    lista.style.height = '20rem'
});

const abrirFiltros = document.getElementById('selecionar-filtros')
const listaFiltros = document.getElementById('filtroPokemons')
abrirFiltros.addEventListener('click', () => {
    if (listaFiltros.style.height == '200px' || listaFiltros.style.height == 'auto') {
        listaFiltros.style.height = '0'  
        return
    }
    listaFiltros.style.height = '200px'  
})