let listaPokemons = document.querySelector('#lista-pokemons');

let filtros = document.querySelectorAll(`.botoes-filtro`);

let limitePersonagens = 21;
let inicioPersonagens = 0

const modal = document.querySelector('#modal')
const fecharModal = document.querySelector('#close-modal')

const elementos = ['Grass', 'Fire', 'Water', 'Bug', 'Normal', 'Poison', 'Electric', 'Ground', 'Fairy', 'Fighting', 'Psychic', 'Rock', 'Ghost', 'Ice', 'Dragon'];

const requisicaoPokemons = (limitePersonagens) => {
    const getUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`;

    const pokemonPromises = [];

    for (let i = 1; i <= 151; i++) {
        pokemonPromises.push(fetch(getUrl(i)).then(response => response.json()));
        
    }

    Promise.all(pokemonPromises)
    .then(pokemons => {

        for (let index = 0; index < 151; index++) {
            let pokemon = pokemons[index]
            const types = pokemon.types.map(typeInfo => typeInfo.type.name);
            gerarNovoIcone( types[0],pokemon.id, pokemon.sprites.front_default, pokemon.name, types.join(' | '));
        };

        let divPokemons = document.querySelectorAll('.pokemons');

        for (let div = 0; div < 151; div++) {
            const divizinha = divPokemons[div];
            divizinha.addEventListener('click', () => {
                let idPokemon = Number(divizinha.querySelector('.id').textContent) -1;

                modal.style.zIndex = 1;
                modal.style.opacity = 1;
                    
                definirModal(meuTeste(pokemons[idPokemon]))
            })
        }

            divPokemons.forEach(divizinha => {
                divizinha.addEventListener('click', () => {
                    let idPokemon = Number(divizinha.querySelector('.id').textContent) -1;
    
                    modal.style.zIndex = 1;
                    modal.style.opacity = 1;
                        
                    definirModal(meuTeste(pokemons[idPokemon]))
                })
            });
 

        filtros.forEach(filtro => {
            filtro.addEventListener('click', function() {
                if (filtro.innerText == 'All' || filtro.innerText == 'all') {
                    divPokemons.forEach (item => 
                        item.style.display = 'grid'
                    );
                } else {
                    for (let testet = 0; testet < 151; testet++) {
                        const divs = divPokemons[testet];
                        if (divs.classList[1] !== String(filtro.innerText).toLowerCase()){
                            divs.style.display = 'none'
                        } else {
                            divs.style.display = 'grid'
                        };
                     }
                };
            });
        });

        for (const iterator in divPokemons) {
            if (iterator >= limitePersonagens) {
                divPokemons[iterator].style.display = 'none';
            } else {
                divPokemons[iterator].style.display = 'grid';
            }
        }
    });
};

const carregarPokemons = document.querySelector('#carregar')

requisicaoPokemons(limitePersonagens);
carregarPokemons.addEventListener("click" , () => {
    //inicioPersonagens += 21
    limitePersonagens += 21
    if (limitePersonagens > 151 ) {
        limitePersonagens = 151
    } //else if (inicioPersonagens > 151) {
        //inicioPersonagens = 151
    //}

    requisicaoPokemons(limitePersonagens);
    //return;
})



const meuTeste = (pok) => {
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
})
