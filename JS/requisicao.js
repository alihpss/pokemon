let listaPokemons = document.querySelector('#lista-pokemons');

let filtros = document.querySelectorAll(`.botoes-filtro`)

const modal = document.querySelector('#modal')
const fecharModal = document.querySelector('#close-modal')

const elementos = ['Grass', 'Fire', 'Water', 'Bug', 'Normal', 'Poison', 'Electric', 'Ground', 'Fairy', 'Fighting', 'Psychic', 'Rock', 'Ghost', 'Ice', 'Dragon'];

const requisicaoPokemons = (inicioPersonagens,limitePersonagens) => {
    const getUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`;

    const pokemonPromises = [];

    for (let i = inicioPersonagens; i <= limitePersonagens; i++) {
        pokemonPromises.push(fetch(getUrl(i)).then(response => response.json()));
        
    }

    Promise.all(pokemonPromises)
    .then(pokemons => {

            
            
        for (let index = 0; index < pokemonPromises.length; index++) {
            let pokemon = pokemons[index]
            const types = pokemon.types.map(typeInfo => typeInfo.type.name);
            //console.log(pokemons[index]);
            gerarNovoIcone( types[0],pokemon.id, pokemon.sprites.front_default, pokemon.name, types.join(' | '));
        };

        let divPokemons = document.querySelectorAll('.pokemons');

        divPokemons.forEach(divizinha => {
            divizinha.addEventListener('click', () => {
                let idPokemon = Number(divizinha.querySelector('.id').textContent) -1;
                //console.log(pokemons[idPokemon]);

                modal.style.zIndex = 1;
                modal.style.opacity = 1;
                    
                definirModal(meuTeste(pokemons[idPokemon]))
            })
        });

        filtros.forEach(filtro => {
            filtro.addEventListener('click', function() {
                divPokemons.forEach (item => {
                    if (item.classList[1] !== filtro.innerText){
                        item.style.display = 'none'
                    } else {
                        item.style.display = 'grid'
                    }
                })
            })
        });

    });
};


requisicaoPokemons(1,200);




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






//console.log(filtros[0].textContent);





