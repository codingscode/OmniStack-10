
const { Router } = require('express')

const rotas = Router()

rotas.post('/usuarios', (requisicao, resposta) => {
    console.log(requisicao)
    console.log('---------------')
    console.log(requisicao.params)
    console.log('---------------')
    console.log(requisicao.body)
    
    return resposta.json({menssagem: 'Olá OminiStack'})
})

module.exports = rotas







