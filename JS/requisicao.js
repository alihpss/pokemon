const listaPokemons = document.querySelector('#lista-pokemons');
let filtros = document.querySelectorAll(`.botoes-filtro`);

let limitePersonagens = 21;
let inicioPersonagens = 0;

const modal = document.querySelector('#modal');
const fecharModal = document.querySelector('#close-modal');

const elementos = ['Grass', 'Fire', 'Water', 'Bug', 'Normal', 'Poison', 'Electric', 'Ground', 'Fairy', 'Fighting', 'Psychic', 'Rock', 'Ghost', 'Ice', 'Dragon'];

const carregarPokemons = document.querySelector('#carregar')

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

        pesquisaDePokemons(divPokemons);

            divPokemons.forEach(caixaPokemon => {
                caixaPokemon.addEventListener('click', () => {
                    let idPokemon = Number(caixaPokemon.querySelector('.id').textContent) -1;

                    let nomeDaClasse = caixaPokemon.classList[1];

                    let requisicaoFraquezas = new XMLHttpRequest()
                    requisicaoFraquezas.open ('GET',`https://pokeapi.co/api/v2/type/${nomeDaClasse}/ `);
                    requisicaoFraquezas.send(); 
                    
                    requisicaoFraquezas.addEventListener('load', () => {
                        let resposta = JSON.parse(requisicaoFraquezas.responseText);
                        let fraquezas = document.querySelector('#fraquezas');
                        let relacoesDeDano = resposta.damage_relations.double_damage_from;
    
                        fraquezas.innerHTML = '';
                        for (let elementos = 0; elementos < relacoesDeDano.length; elementos++) {
                            const elementoAtual = relacoesDeDano[elementos];
                            let nomeElemento = elementoAtual.name;
                            console.log(nomeElemento);
    
                            let itemFraquezas = document.createElement('li');
                            itemFraquezas.textContent = nomeElemento; 
                            itemFraquezas.classList.add(`tag`);
                            itemFraquezas.classList.add(`${nomeElemento}`);
    
                            fraquezas.appendChild(itemFraquezas);
                        };
    
                    });
    
                    modal.style.zIndex = 1;
                    modal.style.opacity = 1;
                        
                    definirModal(gerarObjetoPokemon(pokemons[idPokemon]))
                })
            });
 

        filtros.forEach(filtro => {

            filtro.classList.add(filtro.innerText.toLowerCase())
            filtro.style.border ='none';

            filtro.addEventListener('click', function() {
                carregarPokemons.style.zIndex = '0'
                carregarPokemons.style.opacity = '0'
                if (filtro.innerText == 'All' || filtro.innerText == 'all') {
                    divPokemons.forEach (item => 
                        item.style.display = 'grid'
                    )
                } else {
                    for (let indiceParaDivs = 0; indiceParaDivs < 151; indiceParaDivs++) {
                        const divs = divPokemons[indiceParaDivs];
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



requisicaoPokemons(limitePersonagens);
carregarPokemons.addEventListener("click" , () => {
    limitePersonagens += 21
    if (limitePersonagens > 151 ) {
        limitePersonagens = 151
    }

    requisicaoPokemons(limitePersonagens);

})



const gerarObjetoPokemon = (pok) => {
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
});


const pesquisaDePokemons = (divs) => {
    const buscarPokemon = document.querySelector('#buscarPokemon');
    buscarPokemon.addEventListener('input', function () {


    for (let index = 0; index < divs.length; index++) {
        const div = divs[index];
        let spanNomePokemon = div.querySelector('.span-name').textContent


            let pesquisa = new RegExp (this.value, 'i');

            if (this.value.length  > 0) {
                if (pesquisa.test(spanNomePokemon)) {
                    div.style.display = 'grid'
                } else {
                    div.style.display = 'none'
                }
            } else {
                div.style.display = 'grid'
            };
        }
    })

};
