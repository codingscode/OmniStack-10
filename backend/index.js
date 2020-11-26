
const express = require('express')

const app = express()

app.get('/', (requisicao, resposta) => {
    return resposta.json({menssagem: 'Olá OminiStack'})
})

app.listen(3333)




