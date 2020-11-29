
const { Router } = require('express')
const axios = require('axios')

const rotas = Router()

rotas.post('/devs', async (requisicao, resposta) => {
    const { github_nomeusuario } = requisicao.body

    const res = await axios.get(`https://api.github.com/users/${github_nomeusuario}`)
    console.log(res.data)

    return resposta.json({menssagem: 'Olá OminiStack'})
})

module.exports = rotas







