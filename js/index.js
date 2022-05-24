//Botão Abrir e fechar Menu

const btnMenu = document.querySelector('#btn-menu')
const navegacao = document.querySelector('nav.navegacao')

btnMenu.addEventListener('click', (e)=> {
	e.preventDefault()
	navegacao.classList.toggle('active')

	if(navegacao.classList.contains('active')) {
		btnMenu.classList.add('active')
	} else {
		btnMenu.classList.remove('active')
	}	
})