
const express = require('express')

const app = express()

// métodos http: get, post, put, delete

/* Tipos de parametros:

Query Params:  req.query (Filtros, ordenação, paginação, ...)
Route Params:
Body:
 */

app.get('/usuarios', (requisicao, resposta) => {
    console.log(requisicao)
    console.log('---------------')
    console.log(requisicao.query)
    return resposta.json({menssagem: 'Olá OminiStack'})
})

app.listen(3333)




