
const { Router } = require('express')

const rotas = Router()

rotas.post('/devs', (requisicao, resposta) => {
    console.log(requisicao.body)
    
    return resposta.json({menssagem: 'Olá OminiStack'})
})

module.exports = rotas







