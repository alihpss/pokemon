let menuPai = document.querySelector('#pai');
let botaoCriar = document.querySelector('#criar')

botaoCriar.addEventListener('click', function (){
    let divCriada = document.createElement('div');
    let imagematual = document.createElement('img')
    let spanCriado = document.createElement('span');
    let segundoSpan = document.createElement('span');
    let inputCriado = document.createElement('input');


    imagematual.setAttribute('src', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png');
    spanCriado.textContent = 'Nome:'
    segundoSpan.textContent = 'Tipo:'
    inputCriado.value = '+ info';
    divCriada.classList.add('filho');

    divCriada.appendChild(imagematual)
    divCriada.appendChild(spanCriado)
    divCriada.appendChild(segundoSpan)
    divCriada.appendChild(inputCriado)

    menuPai.appendChild(divCriada)

    console.log(menuPai);
})

