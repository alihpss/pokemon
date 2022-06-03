let listaPokemons = document.querySelector('#lista-pokemons');

let filtros = document.querySelectorAll(`.botoes-filtro`);

let limitePersonagens = 21;
let inicioPersonagens = 0

const modal = document.querySelector('#modal')
const fecharModal = document.querySelector('#close-modal')

const elementos = ['Grass', 'Fire', 'Water', 'Bug', 'Normal', 'Poison', 'Electric', 'Ground', 'Fairy', 'Fighting', 'Psychic', 'Rock', 'Ghost', 'Ice', 'Dragon'];

const requisicaoPokemons = (inicioPersonagens,limitePersonagens) => {
    const getUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`;

    const pokemonPromises = [];

    for (let i = 1; i <= 151; i++) {
        pokemonPromises.push(fetch(getUrl(i)).then(response => response.json()));
        
    }

    Promise.all(pokemonPromises)
    .then(pokemons => {

            
            
        for (let index = inicioPersonagens; index < limitePersonagens; index++) {
            let pokemon = pokemons[index]
            const types = pokemon.types.map(typeInfo => typeInfo.type.name);
            gerarNovoIcone( types[0],pokemon.id, pokemon.sprites.front_default, pokemon.name, types.join(' | '));
        };

        let divPokemons = document.querySelectorAll('.pokemons');
        
        //for (let nDiv = 0; nDiv < 151; nDiv++) {
        //    let divAtual = divPokemons[nDiv];
        //    if (nDiv < limitePersonagens) {
        //        divAtual.style.display = 'grid'
        //    } else {
        //        divAtual.style.display = 'none'
        //    }
        //};

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
                    requisicaoPokemons(limitePersonagens, 151);
                    divPokemons.forEach (item => 
                        item.style.display = 'grid'
                    );
                } else {
                    divPokemons.forEach (item => {
                        if (item.classList[1] !== String(filtro.innerText).toLowerCase()){
                            item.style.display = 'none'
                        } else {
                            item.style.display = 'grid'
                        };
                    });
                };
            });
        });
    });
};


requisicaoPokemons(inicioPersonagens,limitePersonagens);
window.addEventListener("click" , () => {
    inicioPersonagens += 21
    limitePersonagens += 21

    requisicaoPokemons(inicioPersonagens, limitePersonagens);
    return;
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
