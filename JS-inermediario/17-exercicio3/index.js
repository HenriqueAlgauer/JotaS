// 1- pegar o elemento quadrado
// 2- adicionar um eventListener 
// 3- criar variavel p/ verificar a existencia da classe azul
// 4- criar laço if 


const quadrado = document.querySelector('.quadrado')

quadrado.addEventListener('click', ()=>{
    const verificacao = quadrado.classList.contains('azul')

    if(verificacao){
        quadrado.classList.remove('azul')
        alert('A cor do quadrado é azul')
    }else{
        quadrado.classList.add('azul')
    }
})

