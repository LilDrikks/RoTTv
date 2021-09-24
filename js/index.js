const btn = document.getElementById('send')

btn.addEventListener('click', () => {
    btn.classList.add('is-loading')


    setTimeout(() => {
        btn.classList.add('is-success')
        btn.classList.remove('is-loading')
    }, 4000)
})