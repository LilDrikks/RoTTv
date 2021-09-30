const btn = document.getElementById('send')

btn.addEventListener('click', () => {
    btn.classList.add('is-loading')


    setTimeout(() => {
        btn.classList.add('is-success')
        btn.classList.remove('is-loading')
    }, 4000)
})

//variavel de escopo global
let btnMobile = document.getElementById('btn-mobile')

//funcao que adiciona uma classe ao click do botao menu
function toggleMenu(event) {

    //(UX) -----------------
    //event pega o evento no momento e compara o tipo
    //caso seja 'touchstart' event não ativa nada mais nem uma outra atividade da function 
    if (event.type === 'touchstart') event.preventDefault()

    //variavel let com valor da tag de id nav do html
    //variavel de escopo de corpo
    let nav = document.getElementById('nav')

    //variavel recebe o dom classList com a função toggle e adiciona a classe active
    nav.classList.toggle('active')

    //variavel active recebe de nav verifica a lista de classes e 
    //verifica tambem a existencia da classe active
    const active = nav.classList.contains('active')

    //event no objeto que esta tagado ou selecionando setando o atributo 
    //area-expanded e dando o valor da variavel active se true ou false  
    event.currentTarget.setAttribute('area-expanded', active)

    //if e else condição que altera o atributo aria-label do button menu
    if (active) event.currentTarget.setAttribute('aria-label', 'Fechar Menu')
    else event.currentTarget.setAttribute('aria-label', 'Abrir Menu')
}

//eventos ao click do botão e ao touch do celular adicionando a function
//variavel btnMobile olha o evento até que se cumpra 
btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)