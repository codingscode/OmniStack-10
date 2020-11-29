
const { Router } = require('express')
const axios = require('axios')

const rotas = Router()

rotas.post('/devs', async (requisicao, resposta) => {
    const { github_nomeusuario } = requisicao.body

    const api_res = await axios.get(`https://api.github.com/users/${github_nomeusuario}`)
    let { name, avatar_url, bio } = api_res.data

    if (!name) {
        name = api_res.data.login
    }

    return resposta.json({menssagem: 'Olá OminiStack'})
})

module.exports = rotas







