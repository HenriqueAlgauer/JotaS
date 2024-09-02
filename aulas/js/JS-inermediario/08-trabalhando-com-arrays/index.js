let frutas = ['banana', 'maçã', 'laranja', 'pêra']
let frutasTamanho = frutas.length

// for(let i=0; i< frutasTamanho; i++){    
//     console.log('Fruta: ' + frutas[i])
// }

frutas.forEach(function(item, indice, array){
    console.log('Fruta: ' + item)
})

frutas.shift()
frutas.unshift('morango')
frutas.pop()
frutas.push('manga')

console.log(frutas);



