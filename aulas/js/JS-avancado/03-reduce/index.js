let ordens = [
    {nome: 'Ricardo', tipo:'compra', quantidade: 56, ativo: 'NFLX34'},
    {nome: 'Roberto', tipo:'compra', quantidade: 76, ativo: 'AAPL34'},
    {nome: 'Raphael', tipo:'venda', quantidade: 21, ativo: 'GOGL34'}
]

let quantidadeDeOrdens = ordens.reduce((somaOrdens, ordem)=>{
    return somaOrdens + ordem.quantidade
}, 0)


