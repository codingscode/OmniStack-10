
const express = require('express')

const app = express()

// métodos http: get, post, put, delete

/* Tipos de parametros:

Query Params:
Route Params:
Body:
 */

app.get('/', (requisicao, resposta) => {
    return resposta.json({menssagem: 'Olá OminiStack'})
})

app.listen(3333)




