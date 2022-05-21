







const gerarNovoIcone = (menu,atributoImg, spanNome, spanTipo) => {
    let div = document.createElement('div');
    let img = document.createElement('img')
    let span1 = document.createElement('span');
    let span2 = document.createElement('span');
    let input = document.createElement('input');

    img.setAttribute('src', atributoImg);
    span1.textContent = spanNome;
    span2.textContent = spanTipo;
    input.value = "+ info"
    div.classList.add('pokemons');

    div.appendChild(img)
    div.appendChild(span1)
    div.appendChild(span2)
    div.appendChild(input)


    menu.appendChild(div);
}

