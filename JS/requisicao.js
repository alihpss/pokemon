const botao = document.querySelector('#listarPokemon');
let divPokemons = document.querySelector('#lista-pokemons');

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

    nome: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
    tipo: pokemon.types[0].type.name.charAt(0).toUpperCase() + pokemon.types[0].type.name.slice(1),
    imagem: pokemon.sprites.front_default

    }

    return poke;
}