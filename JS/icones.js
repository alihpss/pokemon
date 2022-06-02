const gerarNovoIcone = (tipo,id, atributoImg, nome, spanTipo) => {
    let div = document.createElement('div');
    let img = document.createElement('img')
    let strong = document.createElement('strong');
    let listaId = document.createElement('span');
    let span2 = document.createElement('span');
    let menu = document.getElementById('lista-pokemons')


    img.setAttribute('src', atributoImg);
    strong.textContent = nome;
    span2.textContent = spanTipo;
    listaId.textContent = id;

    strong.classList.add('span-name')
    div.classList.add('pokemons');
    div.classList.add(tipo);
    listaId.classList.add('id');


    div.appendChild(img)
    div.appendChild(strong)
    div.appendChild(span2)
    div.appendChild(listaId)

    menu.appendChild(div);
};

const definirModal = (pokemon) => {
    let itemTipo = document.querySelector('#svg-modal');
    let imgModal = document.querySelector('#img-modal');
    let pokemonNome = document.querySelector('#nome-pokemon');
    let idPokemon = document.querySelector('#id-pokemon');

    let listaTipoPokemon = document.querySelector('#tipo');

    let infoAltura = document.querySelector('#info-height');
    let infoPeso = document.querySelector('#info-weight');
    let infoHabilidade = document.querySelector('#info-abilities')
    let barraHp = document.querySelector('#bar-hp');
    let barraAtaque = document.querySelector('#bar-ataque');
    let barraDefesa = document.querySelector('#bar-defesa');
    let barraSpAtaque = document.querySelector('#bar-spAtaque');
    let barraSpDefesa = document.querySelector('#bar-spDefesa');
    let barraVelocidade = document.querySelector('#bar-velocidade');


    itemTipo.setAttribute('src', `/img/svg-${pokemon.tipo[0]}.svg`);
    imgModal.setAttribute('src', pokemon.img);
    pokemonNome.textContent = pokemon.nome;
    idPokemon.textContent = `#${pokemon.id}`;

    listaTipoPokemon.innerHTML = '';

    for (let indice = 0; indice < pokemon.tipo.length; indice++) {

        const tipo = pokemon.tipo[indice];
        let liNova = document.createElement('li');

        liNova.classList.add('tag')
        liNova.textContent = tipo;

        listaTipoPokemon.appendChild(liNova);
    };

    infoAltura.textContent = `${Number(pokemon.altura) / 10}m`;
    infoPeso.textContent = `${Number(pokemon.peso) / 10}kg`;
    infoHabilidade.textContent = pokemon.habilidade;

    barraHp.style.width = `${pokemon.stats[0].base_stat}%`

};

