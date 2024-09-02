const calcularValorPedido = require('./calcular-valor-pedido');


it('não deve cobrar valor de frete quando valor dos produtos > 500', ()=>{
    // AAA - 3 passos de criação de um teste 

    //ARRANGE - ARRUMAR
    const meuPedido = {
        itens: [
            {nome: 'Arco Encantado', valor: 2000},
            {nome: 'Entrega', valor: 50, entrega: true}
        ]
    }

    //ACT - AÇÃO 
    const resultado = calcularValorPedido(meuPedido)

    //ASSERT - ASSERÇÃO (QUAL O RESULTADO ESPERADO )
    expect(resultado).toBe(2000)
})

it('deve cobrar valor de frete quando valor dos produtos < 500', ()=>{
    // AAA - 3 passos de criação de um teste 

    //ARRANGE - ARRUMAR
    const meuPedido = {
        itens: [
            {nome: 'Espada de Prata', valor: 400},
            {nome: 'Entrega', valor: 50, entrega: true}
        ]
    }

    //ACT - AÇÃO 
    const resultado = calcularValorPedido(meuPedido)

    //ASSERT - ASSERÇÃO (QUAL O RESULTADO ESPERADO )
    expect(resultado).toBe(450)
})

it('deve cobrar valor de frete quando valor dos produtos for EXATAMENTE 500', ()=>{
    // AAA - 3 passos de criação de um teste 

    //ARRANGE - ARRUMAR
    const meuPedido = {
        itens: [
            {nome: 'Sanduíche bem caro', valor: 500},
            {nome: 'Entrega', valor: 50, entrega: true}
        ]
    }

    //ACT - AÇÃO 
    const resultado = calcularValorPedido(meuPedido)

    //ASSERT - ASSERÇÃO (QUAL O RESULTADO ESPERADO )
    expect(resultado).toBe(550)
})

/* Caso os Estados de entrega sejam RS ou SC, deve ser acrescido um valor de 20% no valor da entrega  */

it('deve adicionar um acrescimo de 20% no valor da entrega do pedido caso o estado seja RS ', ()=>{
    const pedidoComEstadoRS = {
        estado: 'RS',
        itens: [
            {nome: 'Sanduíche bem caro', valor: 500},
            {nome: 'Entrega', valor: 50, entrega: true}
        ]
    }

    const resultado = calcularValorPedido(pedidoComEstadoRS)

    expect(resultado).toBe(560)
})

it('deve adicionar um acrescimo de 20% no valor da entrega do pedido caso o estado seja SC ', ()=>{
    const pedidoComEstadoRS = {
        estado: 'SC',
        itens: [
            {nome: 'Sanduíche bem caro', valor: 500},
            {nome: 'Entrega', valor: 50, entrega: true}
        ]
    }

    const resultado = calcularValorPedido(pedidoComEstadoRS)

    expect(resultado).toBe(560)
})
