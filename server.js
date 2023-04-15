const http = require('http')
const main= require('./main')
const port= process.env.PORT ||3000
const server= http.createServer(main)
server.listen(port,()=>{
    console.log("marche sur le port "+ port)
})