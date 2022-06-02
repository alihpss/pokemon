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
                gerarNovoIcone( types[0],pokemon.id, pokemon.sprites.front_default, pokemon.name, types.join(' | '));
            };

            let divPokemons = document.querySelectorAll('.pokemons');

            divPokemons.forEach(divizinha => {
                divizinha.addEventListener('click', () => {
                    let idPokemon = Number(divizinha.querySelector('.id').textContent) -1;
                    console.log(pokemons[idPokemon]);
                    //console.log(meuTeste(pokemons[idPokemon]));
                    definirModal(meuTeste(pokemons[idPokemon]))
                })
            });

        });
};
requisicaoPokemons(1,20);

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
}





