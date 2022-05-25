const botao = document.querySelector('#listarPokemon');
let listaPokemons = document.querySelectorAll('.pokemons')
let divPokemons = document.querySelector('#lista-pokemons');

const elementos = ['Grass', 'Fire', 'Water', 'Bug', 'Normal', 'Poison', 'Electric', 'Ground', 'Fairy', 'Fighting', 'Psychic', 'Rock', 'Ghost', 'Ice', 'Dragon']

const res = document.querySelector('#res')


const requisicaoPokemons = (inicioPersonagens,limitePersonagens) => {
    const getUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`

    const pokemonPromises = []

    for (let i = inicioPersonagens; i <= limitePersonagens; i++) {
        pokemonPromises.push(fetch(getUrl(i)).then(response => response.json()))
        
    }

    Promise.all(pokemonPromises)
        .then(pokemons => {
            for (let index = 0; index < pokemonPromises.length; index++) {
                let pokemon = pokemons[index]
                const types = pokemon.types.map(typeInfo => typeInfo.type.name)

                gerarNovoIcone(divPokemons, types[0], pokemon.sprites.front_default, pokemon.name, types.join(' | '));
            }
            
        })

}
requisicaoPokemons(1,24);





//window.addEventListener('load' , () => {
    //for (let i = 1; i <= 24; i++) {
        //const requisicao = new XMLHttpRequest(); 

        //fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        //.then(response => response.json())
        //.then(pokemon => {

            //let atribuiPoke = criarPokemon(pokemon);
            //gerarNovoIcone(divPokemons, atribuiPoke.imagem, atribuiPoke.nome, atribuiPoke.tipo)
        //})

        //requisicao.open('GET' , `https://pokeapi.co/api/v2/pokemon/${i}`)
        //requisicao.send(); 
//
        //requisicao.addEventListener('load', function () {
        //    let resposta = requisicao.responseText;
        //    console.log(requisicao);
        //    respostaJson = JSON.parse(resposta);
        //    //console.log(respostaJson);
        //    let pokemon = criarPokemon(respostaJson);
        //    
        //    gerarNovoIcone(divPokemons, pokemon.imagem, pokemon.nome, pokemon.tipo);
        //})
    //}
//})

function criarPokemon(pokemon) {

    let poke = {

    nome: pokemon.name,
    tipo: pokemon.types[0].type.name,
    imagem: pokemon.sprites.front_default

    }
    


    return poke;
}

