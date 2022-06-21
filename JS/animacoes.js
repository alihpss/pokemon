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
        lista.style.height = '20rem';

    }  else {
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

let ativarFiltro = document.querySelectorAll('.ativar-filtro');
let iconeFiltro = document.querySelector('#ativar-filtro');

window.addEventListener('resize', function () {
    if (window.innerWidth > 500 && iconeFiltro.style.display == 'flex') {
        iconeFiltro.style.left = '8rem';
    };
});

ativarFiltro.forEach(ativar => {
    ativar.addEventListener('click', () => {

        if (listaDeFiltros.style.display == 'none' || listaDeFiltros.style.display == '') {
            if (window.innerWidth <= 500) {
                habilitarFiltros(ativar,'flex', '0rem', 'url(img/svg-filtro-ativo.svg)');
            } else {
                habilitarFiltros(ativar,'flex', '8rem', 'url(img/svg-filtro-ativo.svg)');
            }
            
        } else {    
            if (window.innerWidth <= 500) {
                habilitarFiltros(ativar,'none', '0rem', 'url(img/svg-filtro-ativo.svg)');
            } else {
                habilitarFiltros(ativar,'none', '2rem', 'url(img/svg-filtro-ativo.svg)');
            }
        };
    });
})

        



