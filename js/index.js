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

const btnAoTopo = document.querySelector('.btn-aoTopo')

window.addEventListener('scroll', e => {
	if(window.scrollY > 100) {
		btnAoTopo.classList.add('active')
	} else {
		btnAoTopo.classList.remove('active')
	}
})

btnAoTopo.addEventListener('click', ()=> {
	window.scrollTo({
	    top: 0,
	    behavior: 'smooth'
	 })
})