let button = document.getElementById('changeColorButton')
let quadradoAzul = document.getElementById('quadradoAzul')

button.addEventListener('click',trocarCor)

function trocarCor(){
    quadradoAzul.className = 'quadrado amarelo'
}
