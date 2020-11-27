
const express = require('express')

const app = express()

// métodos http: get, post, put, delete

/* Tipos de parametros:

Query Params:  req.query (Filtros, ordenação, paginação, ...)
Route Params:  request.params (identificar um recurso na alteração ou remoção)
Body:
 */

app.delete('/usuarios/:id', (requisicao, resposta) => {
    console.log(requisicao)
    console.log('---------------')
    console.log(requisicao.params)
    return resposta.json({menssagem: 'Olá OminiStack'})
})

app.listen(3333)




