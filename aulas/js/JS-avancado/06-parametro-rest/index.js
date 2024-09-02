function incentivarQuester(mensagem, ...nomesQuesters){
    nomesQuesters.map( nomeQuester => console.log(`${mensagem} ${nomeQuester}`))
    
}

incentivarQuester('Parabéns por ter chegado ao módulode JavaScript avançado ', 'Henrique', 'João', 'Pedro', 'Rafael' )