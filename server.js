const express = require("express")
const accountRoute = require('./routers/account.route')
const app=express()
/*
var swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('./swagger.json');


app.use('/swagger',swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(bodyParser.urlencoded({extended:false}),router);
app.listen(3000,'127.0.0.1');

*/

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/',accountRoute)



app.listen(3000,()=>console.log('server running on post 3000'))