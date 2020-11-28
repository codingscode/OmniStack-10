
const express = require('express')

const app = express()
app.use(express.json()) // válido para todos

// métodos http: get, post, put, delete

/* Tipos de parametros:

Query Params:  req.query (Filtros, ordenação, paginação, ...)
Route Params:  request.params (identificar um recurso na alteração ou remoção)
Body: request.body (Dados para criação ou alteração de um registro)
 */

app.post('/usuarios', (requisicao, resposta) => {
    console.log(requisicao)
    console.log('---------------')
    console.log(requisicao.params)
    console.log('---------------')
    console.log(requisicao.body)
    
    return resposta.json({menssagem: 'Olá OminiStack'})
})

app.listen(3333)




