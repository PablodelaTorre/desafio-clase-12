const socket = io()

const tablaProducts = document.getElementById("products")

client.on('productos', (productos) => {
    tablaProducts.innerHTML = productos.map(p => {
        return(
            `
            <div class="container">
            <table>
                <tr class="filas">
                    <th class="columnas">Id</th>
                    <th class="columnas">Title</th>
                    <th class="columnas">Price</th>
                    <th class="columnas">Thumbnail</th>
                </tr>

                <tr class="filas">
                    <th class="columnas">p.id</th>
                    <th class="columnas">p.title</th>
                    <th class="columnas">p.price</th>
                    <th class="columnas">p.photo</th>
                </tr>
            </table>  
            `
    )
    }).join(" ")
})