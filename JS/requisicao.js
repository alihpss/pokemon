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
                //console.log(pokemons[index]);
                gerarNovoIcone( types[0], pokemon.sprites.front_default, pokemon.name, types.join(' | '));

                meuTeste(pokemon)
                console.log(meuTeste(pokemon));
                //console.log(pokemon.nome);
               //console.log(teste);
            };



            let divPokemons = document.querySelectorAll('.pokemons')
            divPokemons.forEach(divizinha => {
                divizinha.addEventListener('click', (event) => {
                    console.log(event.target.parentNode);
                })
            })
        })
};
requisicaoPokemons(152,172);

const meuTeste = (pok) => {
    let poo = {
        nome: pok.name,
        img: pok.sprites.other.home.front_default,
        stats: pok.stats,
        altura: pok.height,
        peso: pok.weight
    }

    return poo
}





