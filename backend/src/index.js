
const express = require('express')
const mongoose = require('mongoose')

const app = express()
mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-kdxee.mongodb.net/week10?retryWrites=true&w=majority', {
   useNewUrlParser: true,
   useUnifiedTopology: true

})
// mongodb+srv://omnistack:omnistack@cluster0-kdxee.mongodb.net/week10?retryWrites=true&w=majority
// mongodb+srv://omnistack:<password>@cluster0-kdxee.mongodb.net/test?retryWrites=true&w=majority
// mongodb+srv://omnistack:omnistack@cluster0-kdxee.mongodb.net/week10?retryWrites=true&w=majority


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




