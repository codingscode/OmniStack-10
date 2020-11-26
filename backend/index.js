
const express = require('express')

const app = express()

app.get('/', (requisicao, resposta) => {
    return resposta.send('Olá mundo')
})

app.listen(3333)




