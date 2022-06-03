const gerarNovoIcone = (tipo,id, atributoImg, nome, spanTipo) => {
    let div = document.createElement('div');
    let img = document.createElement('img')
    let strong = document.createElement('strong');
    let listaId = document.createElement('span');
    let span2 = document.createElement('span');
    let menu = document.getElementById('lista-pokemons');
    let svg = document.createElement('img')

    svg.setAttribute('src', `/img/svg-${tipo}.svg`);
    img.setAttribute('src', atributoImg);
    strong.textContent = nome;
    span2.textContent = spanTipo;
    listaId.textContent = id;

    svg.classList.add('svg-pokemon')
    strong.classList.add('span-name')
    div.classList.add('pokemons');
    div.classList.add(tipo);
    listaId.classList.add('id');


    div.appendChild(svg)
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

    let stats = [
        document.querySelector('#bar-hp'),
        document.querySelector('#bar-ataque'),
        document.querySelector('#bar-defesa'),
        document.querySelector('#bar-spAtaque'),
        document.querySelector('#bar-spDefesa'),
        document.querySelector('#bar-velocidade')
    ]


    itemTipo.setAttribute('src', `/img/svg-${pokemon.tipo[0]}.svg`);
    imgModal.setAttribute('src','');
    imgModal.setAttribute('src', pokemon.img);
    pokemonNome.textContent = pokemon.nome;
    if (pokemon.id < 10) {
        idPokemon.textContent = `#00${pokemon.id}`;
    } else if (pokemon.id < 100) {
        idPokemon.textContent = `#0${pokemon.id}`;
    } else {
        idPokemon.textContent = `#${pokemon.id}`;
    }


    listaTipoPokemon.innerHTML = '';

    for (let indice = 0; indice < pokemon.tipo.length; indice++) {

        const tipo = pokemon.tipo[indice];
        let liNova = document.createElement('li');
        liNova.classList.remove();

        liNova.classList.add('tag')
        liNova.textContent = tipo;
        liNova.classList.add(pokemon.tipo[indice])
        listaTipoPokemon.appendChild(liNova);
    };

    infoAltura.textContent = `${Number(pokemon.altura) / 10}m`;
    infoPeso.textContent = `${Number(pokemon.peso) / 10}kg`;
    infoHabilidade.textContent = pokemon.habilidade;

    for (let valor = 0; valor < stats.length; valor++) {
        const statsAtual = stats[valor];
        statsAtual.style.width = `${pokemon.stats[valor].base_stat}%`
    }

};

