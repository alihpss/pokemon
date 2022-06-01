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
}

