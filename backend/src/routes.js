
const { Router } = require('express')
const axios = require('axios')

const rotas = Router()

rotas.post('/devs', (requisicao, resposta) => {
    const { github_nomeusuario } = requisicao.body

    const res = axios.get(`https://api.github.com/users/${github_nomeusuario}`)

    return resposta.json({menssagem: 'Olá OminiStack'})
})

module.exports = rotas







