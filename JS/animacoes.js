const primeiraDiv = document.querySelector('#explicacaoUm');
const segundaDiv = document.querySelector('#explicacaoDois');
const clique = document.querySelector('#exemplo-clique');
const modalAtivo = document.querySelector('#modal');

const listaDeFiltros = document.getElementById('filtroPokemons');

window.addEventListener('scroll', () => {

    let valor = parseInt(100 * document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight))
    if (primeiraDiv.classList[0] == 'animacao') {
    } else if (Number(valor) > 5) {
        primeiraDiv.style.visibility = 'visible';
        primeiraDiv.classList.add('animacao');
    }
    
    if (segundaDiv.classList[0] == 'animacao') {
        
    } else if (Number(valor) > 9) {
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

window.addEventListener('resize', function () {
    if (window.innerWidth > 500 ) {
        listaDeFiltros.style.display = 'none';
        lista.style.height = '20rem';
        listaDeFiltros.style.opacity = '1';

    }  else {
        listaDeFiltros.style.height = '0';
        listaDeFiltros.style.display = 'flex';
        lista.style.height = '0rem';
    }
})

botaoMenu.addEventListener('click' , () => {

    if (lista.style.overFlow == 'visible') {
        lista.style.height = '0rem';
        lista.style.overFlow = 'hidden'
    } else {
        lista.style.height = '20rem';
        lista.style.overFlow = 'visible'
    }
});



window.addEventListener('resize', function () {
    if (window.innerWidth > 602) {
        listaDeFiltros.style.display = 'flex';
        ativarFiltro.style.left = '8rem';
    };

    if (window.innerWidth > 500) {
        listaDeFiltros.style.height = 'auto';
    };
});

let ativarFiltro = document.querySelector('#ativar-filtro');

ativarFiltro.addEventListener('click', () => {


    if (listaDeFiltros.style.display == 'none') {
        habilitarFiltros('flex', '8rem', 'url(img/svg-filtro-ativo.svg)');
    } else {    
        habilitarFiltros('none', '2rem','url(img/svg-filtro-inativo.svg)');
    };
});
        



