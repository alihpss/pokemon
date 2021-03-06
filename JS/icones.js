const menu = document.getElementById('lista-pokemons');

function gerarDivs () {
    for (let div = 0; div < 493; div++) {
        const div = document.createElement('div');
        
        div.classList.add('pokemons');
        menu.appendChild(div);
    }
}
const gerarNovoIcone = (div,tipo, tipoSecundario, id, atributoImg, nome, spanTipo) => {
    const img = document.createElement('img')
    const strong = document.createElement('strong');
    const listaId = document.createElement('span');
    const tipo2 = document.createElement('span');
    const span2 = document.createElement('span');
    const svgTipo = document.createElement('img');

    svgTipo.setAttribute('src', `img/svg-${tipo}.svg`);
    img.setAttribute('src', atributoImg);

    strong.textContent = nome;
    span2.textContent = spanTipo;
    listaId.textContent = id;
    tipo2.textContent = tipoSecundario;

    svgTipo.classList.add('svg-pokemon');

    strong.classList.add('span-name');
    div.classList.add(tipo);
    listaId.classList.add('id');
    tipo2.classList.add('tipo-secundario');

    div.appendChild(svgTipo);

    div.appendChild(img);
    div.appendChild(strong);
    div.appendChild(span2);
    div.appendChild(tipo2);
    div.appendChild(listaId);
};

const definirModal = (pokemon) => {
    let itemTipo = document.querySelector('#svg-modal');
    let imgModal = document.querySelector('#img-modal');
    let pokemonNome = document.querySelector('#nome-pokemon');
    let idPokemon = document.querySelector('#id-pokemon');

    let ladoEsquerdo = document.querySelector('.lado-esquerdo');

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
    ];

    ladoEsquerdo.style.background = `url(img/bg-${pokemon.tipo[0]}.svg)`;
    ladoEsquerdo.style.backgroundSize = `cover`;
    itemTipo.setAttribute('src', `img/svg-${pokemon.tipo[0]}.svg`);
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
        liNova.classList.add(pokemon.tipo[indice]);
        listaTipoPokemon.appendChild(liNova);
    };

    infoAltura.textContent = `${Number(pokemon.altura) / 10}m`;
    infoPeso.textContent = `${Number(pokemon.peso) / 10}kg`;
    infoHabilidade.textContent = pokemon.habilidade;

    for (let valor = 0; valor < stats.length; valor++) {
        const statsAtual = stats[valor];
        statsAtual.style.width = `${pokemon.stats[valor].base_stat}%`;
    };

};
const fraquezaPokemon = (caixaPokemon) => {
    let nomeDaClasse = caixaPokemon.classList[1];

    let requisicaoFraquezas = new XMLHttpRequest()
    requisicaoFraquezas.open ('GET',`https://pokeapi.co/api/v2/type/${nomeDaClasse}/ `);
    requisicaoFraquezas.send(); 
    
    requisicaoFraquezas.addEventListener('load', function() {
        let resposta = JSON.parse(this.responseText);
        let fraquezas = document.querySelector('#fraquezas');
        let relacoesDeDano = resposta.damage_relations.double_damage_from;

        fraquezas.innerHTML = '';
        for (let elementos = 0; elementos < relacoesDeDano.length; elementos++) {
            const elementoAtual = relacoesDeDano[elementos];
            let nomeElemento = elementoAtual.name;

            let itemFraquezas = document.createElement('li');
            itemFraquezas.textContent = nomeElemento; 
            itemFraquezas.classList.add(`tag`);
            itemFraquezas.classList.add(`${nomeElemento}`);

            fraquezas.appendChild(itemFraquezas);
        };

    });
};

const habilitarFiltros = (ativarFiltro,display, medidaLateral, imgFundo) => {
    listaDeFiltros.style.display = display;
    ativarFiltro.style.left = medidaLateral;
    listaDeFiltros.value = display;
    imgFiltro.style.background = imgFundo;
    imgFiltro.style.backgroundSize = 'cover';
}





