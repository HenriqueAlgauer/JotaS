let pessoas = [
    {nome: 'Ricardo', idade: 33},
    {nome: 'Roberto', idade: 33},
    {nome: 'Raphael', idade: 27}
]

let nomeDasPessoas = pessoas.map(function(pessoa){
    return pessoa.nome + 'têm' + pessoa.idade + 'anos de idade'
})
console.log(nomeDasPessoas);
// ['Ricardo', 'Roberto', 'Raphael']

