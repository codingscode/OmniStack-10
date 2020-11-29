
const { Router } = require('express')
const axios = require('axios')

const rotas = Router()

rotas.post('/devs', async (requisicao, resposta) => {
    const { github_nomeusuario } = requisicao.body

    const api_res = await axios.get(`https://api.github.com/users/${github_nomeusuario}`)
    const { name = login, avatar_url, bio } = api_res.data
    
    console.log(name, avatar_url, bio, github_nomeusuario)

    return resposta.json({menssagem: 'Olá OminiStack'})
})

module.exports = rotas







