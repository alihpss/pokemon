const botao = document.querySelector('#listarPokemon');
// img = https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.pngz
const res = document.querySelector('#res')

window.addEventListener('load' , () => {
    for (let i = 1; i <= 151; i++) {
        const requisicao = new XMLHttpRequest(); 

        requisicao.open('GET' , `https://pokeapi.co/api/v2/pokemon/${i}/`)
        requisicao.send(); 

        requisicao.addEventListener('load', function () {
            let resposta = requisicao.responseText;

            respostaJson = JSON.parse(resposta);

            criarPokemon(respostaJson);
            console.log(criarPokemon(respostaJson));

            })
    }
})

function criarPokemon(pokemon) {

    let poke = {

    nome: pokemon.name,
    tipo: pokemon.types[0].type.name

    }
    return poke;
}