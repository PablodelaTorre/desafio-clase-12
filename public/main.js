const socket = io()

const inputTitle = document.getElementById("title")
const inputPrice = document.getElementById("price")
const inputPhoto = document.getElementById("photo")
const button = document .getElementById("button")
const tablaProducts = document.getElementById("tablaP")

button.addEventListener('click', (e) => {
    const titulo = inputTitle.value
    const precio = inputPrice.value
    const foto = inputPhoto.value
    
    const producto = {
        titulo: titulo,
        precio: precio,
        foto: foto
    }
    console.log(producto)
    socket.emit("newProducto", producto)
})


socket.on('productos', (productos) => {
    tablaProducts.innerHTML = productos.map(p => {
        return(
            `   
                <tr class="filas">
                    <th class="columnas">${p.titulo}</th>
                    <th class="columnas">${p.precio}</th>
                    <th class="columnas">${p.foto}</th>
                </tr>
            `
    )
    }).join(" ")
})