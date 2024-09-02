setTimeout(function(){
    // alert('Você entrou no Site !')      
}, 1000)

setInterval(function(){
    // console.log('Set Interval executando a cada 2 segundos');
}, 2000)

const idDoIntervalo = setInterval(function(){
    console.log('Set Interval executando a cada 2 segundos');
}, 2000)

console.log(idDoIntervalo);
clearInterval(idDoIntervalo)
clearTimeout()