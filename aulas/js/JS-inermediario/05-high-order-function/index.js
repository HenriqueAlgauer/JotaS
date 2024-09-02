// const calcularAnoDeNascimento = function (idade, mesNascimento, imprimir){
//     const mesAtual = 3
//     let anoDeNascimento = 2023 - idade
//     if(mesNascimento > mesAtual ) anoDeNascimento--
//     imprimir(anoDeNascimento)
// }

// let imprimirAnoDeNascimento = anoNascimento => {
//     console.log('Seu ano de nascimento é: ' + anoNascimento)
// }

// calcularAnoDeNascimento(17, 5, imprimirAnoDeNascimento)

function multiplicar(multiplicador){
    return function(numero){
        return numero* multiplicador
    }
}

let dobrar = multiplicar(2)
let triplicar = multiplicar(3)
let quadruplicar = multiplicar(4)

console.log(dobrar(4));
console.log(triplicar(4));
console.log(quadruplicar(4));















