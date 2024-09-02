let pessoa = {nome: 'Henriqe', sobrenome:'Algauer', idade: 18 }

let { nome: name , idade: age, sobrenome: sobrenomePessoa } = pessoa

let { nome, idade, sobrenome} = pessoa

console.log(nome); // Henrique
console.log(idade); // 18
console.log(sobrenome); // Algauer

const numeros = [0, 1, 2, 3]

const [zero, um, dois, tres] = numeros

console.log(um); // 1
console.log(dois); // 2


