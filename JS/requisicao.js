const botao = document.querySelector('#listarPokemon');

let listaPokemons = document.querySelector('#lista-pokemons');

const elementos = ['Grass', 'Fire', 'Water', 'Bug', 'Normal', 'Poison', 'Electric', 'Ground', 'Fairy', 'Fighting', 'Psychic', 'Rock', 'Ghost', 'Ice', 'Dragon'];

const res = document.querySelector('#res')


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
                console.log(pokemons[index]);
                gerarNovoIcone( types[0], pokemon.sprites.front_default, pokemon.name, types.join(' | '));

                
                
               //console.log(teste);
            };

           // outrasInfo

            let divPokemons = document.querySelectorAll('.pokemons')
            console.log(divPokemons[0]);
        })
};
requisicaoPokemons(152,160);





