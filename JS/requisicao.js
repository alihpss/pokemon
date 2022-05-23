const botao = document.querySelector('#listarPokemon');
let listaPokemons = document.querySelectorAll('.pokemons')
let divPokemons = document.querySelector('#lista-pokemons');

const elementos = ['Grass', 'Fire', 'Water', 'Bug', 'Normal', 'Poison', 'Electric', 'Ground', 'Fairy', 'Fighting', 'Psychic', 'Rock', 'Ghost', 'Ice', 'Dragon']

const res = document.querySelector('#res')

window.addEventListener('load' , () => {
    for (let i = 1; i <= 151; i++) {
        const requisicao = new XMLHttpRequest(); 

        requisicao.open('GET' , `https://pokeapi.co/api/v2/pokemon/${i}/`)
        requisicao.send(); 

        requisicao.addEventListener('load', function () {
            let resposta = requisicao.responseText;

            respostaJson = JSON.parse(resposta);

            let pokemon = criarPokemon(respostaJson);
            
            gerarNovoIcone(divPokemons, pokemon.imagem, pokemon.nome, pokemon.tipo);
        })
    }
})

function criarPokemon(pokemon) {

    let poke = {

    nome: pokemon.name,
    tipo: pokemon.types[0].type.name,
    imagem: pokemon.sprites.front_default

    }
    


    return poke;
}

