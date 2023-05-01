'use strict'
// com o modo estrito, o escopo do 'this' não vaza, ou seja não é possível acessar o this.name dentro de um escopo local

// console.log(window);
// console.log(window === this);

// // o this está no contexto global
// this.name = 'Henrique' 

// function saudar() {
//     console.log('this no contexto da função', this);
//     console.log('Olá, ', this.name);

// }

// saudar()

let user = {
    name: 'Henrique',
    saudar: function(){
        console.log('this no contexto da metodo', this);
        
        console.log('this.name no contexto do método', this.name)
    }
}

user.saudar()

let comida = {
    name: 'Brócolis',
    temperatura: 0,
}

comida.cozinhar = function(temperaturaCozimento){
    this.temperatura = temperaturaCozimento
}

comida.cozinhar(100)

console.log(comida);
