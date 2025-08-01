// objetos que simulan productos

let producto1 = {

    Nombre: "pega",
    Cantidad: 20,
}

let producto2 = {

    Nombre: "hoja de examen",
    Cantidad: 10,
}

let producto3 = {

    Nombre: "Lapices Mongol",
    Cantidad: 2,
}


//seleccion de etiquetas del html

let $buttonAdd = document.querySelector("#add"),
    $buttonEdit = document.querySelector("#edit"),
    $buttonDel = document.querySelector("#del"),
    $buttonSave = document.querySelector("#save"),
    $buttonAddClose = ("#Add__Close"),
    $InvSearch = document.querySelector("#Inv__Search");


//seleccion de etiquetas del modal Add

let $AddNameInput = document.querySelector("#productName"),
    $AddQtyInput = document.querySelector("#productQuant"),
    $AddDateInput = document.querySelector("#productDate"),
    $AddProvInput = document.querySelector("#productProv");

//Funciones de los botones.
// boton add

function addOpen() {
    cerrarModales();
    document.getElementById("modal__Add").style.display = "block";
}

function addClose() {
    
    document.getElementById("modal__Add").style.display = "none";
}

// boton editar

function editOpen() {
    cerrarModales();
    document.getElementById("modal__Edit").style.display = "block";
}

function editClose() {
    document.getElementById("modal__Edit").style.display = "none";
}

// boton eliminar

function delOpen() {
    cerrarModales();
    document.getElementById("modal__Del").style.display = "block";
}
function delClose() {   
    document.getElementById("modal__Del").style.display = "none";
}

// boton guardar modal Add

function saveClose__Add(){

    $InvSearch.innerHTML += `
        <div class="inv__item" onclick="mostrarGlobal()" style="cursor:pointer;">
            <span class="inv__name">${$AddNameInput.value}</span>
            <span class="inv__qty">${$AddQtyInput.value}</span>
            ${$AddQtyInput.value > 5 ? '<span class="inv__circle inv__circle--green"></span>' : '<span class="inv__circle inv__circle--red"></span>'}
        </div>
    `;

    inventario.push({
        categoria: $AddNameInput.value,
        productos: [
            {
                nombre: $AddNameInput.value,
                cantidad: parseInt($AddQtyInput.value),
                fechaCompra: $AddDateInput.value,
                proveedor: $AddProvInput.value,
                vendidos: 0
            }
        ]
    });

    console.log(inventario);    

    cerrarModales();
}

// prevenir que se abran varias ventanas a la vez 

function cerrarModales() {
    document.getElementById("modal__Add").style.display = "none";
    document.getElementById("modal__Edit").style.display = "none";
    document.getElementById("modal__Del").style.display = "none";
}

//simulacion de funcionalidad
//
//
//


const inventario = [
    {
        categoria: "Hojas",
        productos: [
            {
                nombre: "Examen",
                cantidad: 3,
                fechaCompra: "2025-07-10",
                proveedor: "Papelería Central",
                vendidos: 1
            },

            {
                nombre: "Blancas",
                cantidad: 10,
                fechaCompra: "2025-07-01",
                proveedor: "Papelería Central",
                vendidos: 5
            }
        ]
    },
    {
        categoria: "Pega",
        productos: [
            {
                nombre: "Pointer",
                cantidad: 6,
                fechaCompra: "2025-07-05",
                proveedor: "Papelería Central",
                vendidos: 3
            }
        ]
    }
];

function renderCategorias() {
    const container = document.getElementById("Inv__Search");
    container.innerHTML = `
        <div class="inv__guide">
            <span class="inv__col">Categoría</span>
            <span class="inv__col">Cantidad</span>
            <span class="inv__col">Stock</span>
        </div>
        <div class="inv__item" onclick="mostrarGlobal()" style="cursor:pointer;">
            <span class="inv__name"><strong>Global</strong></span>
            <span class="inv__qty">${inventario.reduce((acc, cat) => acc + cat.productos.reduce((a, p) => a + p.cantidad, 0), 0)}</span>
            <span class="inv__circle inv__circle--green"></span>
        </div>
    `;
    inventario.forEach(cat => {
        const total = cat.productos.reduce((acc, p) => acc + p.cantidad, 0);
        const color = total > 5 ? "green" : "red";
        container.innerHTML += `
            <div class="inv__item" onclick="mostrarCategoria('${cat.categoria}')" style="cursor:pointer;">
                <span class="inv__name">${cat.categoria}</span>
                <span class="inv__qty">${total}</span>
                <span class="inv__circle inv__circle--${color}"></span>
            </div>
        `;
    });
    // Mostrar texto grande en overview
    document.getElementById("Inv__Over").innerHTML = `
        <div style="font-size:2rem; text-align:center; margin-top:100px; color:#333;">
            Seleccione categoría
        </div>
    `;
}
window.renderCategorias = renderCategorias;

// Mostrar todos los productos agrupados por categoría
function mostrarGlobal() {
    const container = document.getElementById("Inv__Over");
    let html = `<h2>Todos los productos</h2>`;
    inventario.forEach(cat => {
        html += `<h3>${cat.categoria}</h3>`;
        cat.productos.forEach((prod, idx) => {
            const color = prod.cantidad > 5 ? "green" : "red";
            html += `
                <div class="inv__item" onclick="mostrarProducto('${cat.categoria}', ${idx})" style="cursor:pointer;">
                    <span class="inv__name">${prod.nombre}</span>
                    <span class="inv__qty">${prod.cantidad}</span>
                    <span class="inv__circle inv__circle--${color}"></span>
                </div>
            `;
        });
    });
    container.innerHTML = html;
}
window.mostrarGlobal = mostrarGlobal;

function mostrarCategoria(nombreCat) {
    const cat = inventario.find(c => c.categoria === nombreCat);
    const container = document.getElementById("Inv__Over");
    if (!cat) return;
    let html = `<h3>${cat.categoria}</h3>`;
    cat.productos.forEach((prod, idx) => {
        const color = prod.cantidad > 5 ? "green" : "red";
        html += `
            <div class="inv__item" onclick="mostrarProducto('${cat.categoria}', ${idx})" style="cursor:pointer;">
                <span class="inv__name">${prod.nombre}</span>
                <span class="inv__qty">${prod.cantidad}</span>
                <span class="inv__circle inv__circle--${color}"></span>
            </div>
        `;
    });
    container.innerHTML = html;
}

function mostrarProducto(nombreCat, idx) {
    const cat = inventario.find(c => c.categoria === nombreCat);
    const prod = cat.productos[idx];
    if (!cat) return;
    const color = prod.cantidad > 5 ? "green" : "red";
    document.getElementById("Inv__Over").innerHTML = `
        <div class="inv__item">
            <button onclick="mostrarCategoria('${cat.categoria}')">Volver</button>
        </div>
        <strong>Vendidos desde última compra:</strong> ${prod.vendidos}
        <strong>Proveedor:</strong> ${prod.proveedor}<br>
        <strong>Fecha de compra:</strong> ${prod.fechaCompra}<br>
        <div>
            <span class="inv__circle inv__circle--${color}"></span>
            <span class="inv__qty">${prod.cantidad}</span>
            <span class="inv__name">${prod.nombre}</span>
        </div>
        <div class="inv__item">
            <h3>${cat.categoria} - ${prod.nombre}</h3>
        </div>
    `;
}




document.addEventListener("DOMContentLoaded", renderCategorias);