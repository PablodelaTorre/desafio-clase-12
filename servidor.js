const express = require('express')
const { Server : ioServer } = require('socket.io')
const http = require('http')
const app = express()
const multer = require('multer')
const routesProductos = require("./routes/routes-productos.js")


const httpServer = http.createServer(app)
const io = new ioServer(httpServer)

app.use(multer({
    dest:__dirname+"/public/files",

}).single("photo"))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname+"/public"))
app.use('/productos', routesProductos)
app.set('views','./views')
app.set('view engine','ejs')

app.get('/',(req,res) => {
    res.render('index', {
        title:"Agregue un producto"
    })
})

const productos = []

io.on('connection',(socket)=>{
    console.log('nuevo cliente conectado', socket.id)
    socket.emit('productos',productos)

    socket.on("newProducto", producto => {
        productos.push(producto)
        io.sockets.emit('productos', productos)
    })
})

const PORT = 8080
const server = httpServer.listen(PORT, () => {
    console.log(`servidor escuchando en el puerto ${PORT}`)
})