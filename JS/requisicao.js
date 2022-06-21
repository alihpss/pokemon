const listaPokemons = document.querySelector('#lista-pokemons');
const filtros = document.querySelectorAll('.botoes-filtro');

let limitePersonagens = 21;

const modal = document.querySelector('#modal');
const fecharModal = document.querySelector('#close-modal');

const elementos = ['Grass', 'Fire', 'Water', 'Bug', 'Normal', 'Poison', 'Electric', 'Ground', 'Fairy', 'Fighting', 'Psychic', 'Rock', 'Ghost', 'Ice', 'Dragon'];
let selecaoDeFiltros = document.querySelector('#selecionar-filtros')

const carregarPokemons = document.querySelector('#carregar');

let listaFiltros = document.querySelector('#filtroPokemons');
const imgFiltro = document.querySelector('#filtro');

gerarDivs();
let divPokemons = document.querySelectorAll('.pokemons');

const requisicaoPokemons = (limitePersonagens) => {
    const getUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`;

    const pokemonPromises = [];

    for (let i = 1; i <= 493; i++) {
        pokemonPromises.push(fetch(getUrl(i)).then(response => response.json()));
    }

    Promise.all(pokemonPromises)
    .then(pokemons => {

        for (let index = 0; index < 493; index++) {
            let pokemon = pokemons[index];
            const types = pokemon.types.map(typeInfo => typeInfo.type.name);
            gerarNovoIcone( divPokemons[index],types[0], types[1],pokemon.id, pokemon.sprites.front_default, pokemon.name, types.join(' | '));
        };

        pesquisaDePokemons(divPokemons);

        modal.style.display = 'flex';
        divPokemons.forEach(caixaPokemon => {
            caixaPokemon.addEventListener('click', () => {
                let idPokemon = Number(caixaPokemon.querySelector('.id').textContent) -1;
                fraquezaPokemon(caixaPokemon);
                modal.style.zIndex = 2;
                modal.style.opacity = 1;
                carregarPokemons.zIndex = 0;
                definirModal(gerarObjetoPokemon(pokemons[idPokemon])) 
            });
        });

        for (const iterator in divPokemons) {

            if ( iterator > 0) {
                if (iterator < limitePersonagens) {
                    divPokemons[iterator].style.display = 'grid';
                } else {
                    divPokemons[iterator].style.display = 'none';
                };
            };
        };

        if (listaFiltros.value != 'none') {
            filtrar(filtros,divPokemons, selecaoDeFiltros);
        };
    });
};

setTimeout(() => {
    let load = document.querySelector('#loading');
    load.style.display = 'none';
    listaPokemons.style.opacity = '1';
}, 6500);


requisicaoPokemons(limitePersonagens);
carregarPokemons.addEventListener("click" , () => {
    limitePersonagens += 21;
    if (limitePersonagens > 493 ) {
        limitePersonagens = 493;
        carregarPokemons.style.zIndex = '-1';
        carregarPokemons.style.opacity = '0';
    }
    let divsNaTela = listaPokemons.childNodes

    for (let index = 21; index < limitePersonagens; index++) {
        const elemento = divsNaTela[index];

        elemento.style.display = 'grid';
    }

})

const gerarObjetoPokemon = (pok) => {
    let poo = {
        id: pok.id,
        nome: pok.name,
        img: pok.sprites.other.home.front_default,
        stats: pok.stats,
        altura: pok.height,
        peso: pok.weight,
        habilidade: pok.abilities[0].ability.name,
        tipo: pok.types.map(typeInfo => typeInfo.type.name)
    }

    return poo
};

fecharModal.addEventListener('click', () => {
    modal.style.opacity = 0;
    setTimeout(() => {
        modal.style.zIndex = -1;
    }, 200);
});


const pesquisaDePokemons = (divs) => {
    const buscarPokemon = document.querySelector('#buscarPokemon');
    buscarPokemon.addEventListener('input', function () {
        let pesquisa = new RegExp (this.value, 'i');
        let filtroAtivo = document.querySelectorAll('.ativo');

        if (filtroAtivo.length > 0) {
            filtroAtivo[0].classList.remove('ativo');
        };
        if (this.value.length  > 0) {
            for (let index = 0; index < 493; index++) {
                const div = divs[index];
                let spanNomePokemon = div.querySelector('.span-name').textContent;
                let spanIdPokemon = div.querySelector('.id').textContent;

                if (pesquisa.test(spanNomePokemon) || pesquisa.test(spanIdPokemon)) {
                    div.style.display = 'grid';
                } else {
                    div.style.display = 'none';
                }
            }

            carregarPokemons.style.opacity = 0;
            carregarPokemons.style.zIndex = -1;

        } else {
            carregarPokemons.style.opacity = 1;
            carregarPokemons.style.zIndex = 0;

            for (const iterator in divs) {

                if ( iterator >= 0) {
                    if (iterator < limitePersonagens) {
                        divs[iterator].style.display = 'grid';
                    } else {
                        divs[iterator].style.display = 'none';
                    };
                };
            };
        };
    });
};

function filtrar(filtros, divPokemons, selecionar) {
    filtros.forEach(filtro => {

        filtro.classList.add(filtro.innerText.toLowerCase())
        filtro.style.border ='none';

        filtro.addEventListener('touchstart', function() {
            carregarPokemons.style.zIndex = '-1';
            carregarPokemons.style.opacity = '0';

            let filtroAtivo = document.querySelectorAll('.ativo');

            if (filtroAtivo.length > 0) {
                filtroAtivo[0].classList.remove('ativo');
            };

            filtro.classList.add('ativo');

            divPokemons.forEach(pokemonDiv => {
                pokemonDiv.style.display = 'none';
            });

            if (filtro.innerText == 'All' || filtro.innerText == 'all') {

                carregarPokemons.style.zIndex = '0'
                carregarPokemons.style.opacity = '1'

                limitePersonagens = 21;
                filtro.classList.add('ativo');
                
                for (let index = 0; index < 21; index++) {
                    const todosPokemons = divPokemons[index];
                    todosPokemons.style.display = 'grid';
                };

                selecionar.value = 'Filter: All';

            } else {

                for (let indiceParaDivs = 0; indiceParaDivs < 493; indiceParaDivs++) {
                    const divs = divPokemons[indiceParaDivs];
                    let tipo2 = divs.querySelector('.tipo-secundario')

                    selecionar.value = `Filter: ${filtro.innerText}`;

                    if (divs.classList[1] == String(filtro.innerText).toLowerCase() || tipo2.textContent == String(filtro.innerText).toLowerCase()){
                        divs.style.display = 'grid';
                    } else {
                        divs.style.display = 'none';
                    };
                };
            };
        });
    });
};

selecaoDeFiltros.addEventListener('click', () => {
    if (listaFiltros.style.height == '200px' || listaFiltros.style.height == 'auto') {
        listaFiltros.style.height = '0';
        listaFiltros.style.opacity = '0';
        listaFiltros.style.pointerEvents = 'none';
        
        return
    }
    listaFiltros.style.height = '200px';
    listaFiltros.style.opacity = '1';
    listaFiltros.style.pointerEvents = 'all';

});

