//Objetos simuladores de la base de datos
let JsonClientes = localStorage.getItem("BDCliente");
let BDCliente = JSON.parse(JsonClientes);

console.log(BDCliente)

let JsonProductos = localStorage.getItem("BDProducto");
let BDProducto = JSON.parse(JsonProductos);

let JsonFactura = localStorage.getItem("BDFactura");
let BDFactura = JSON.parse(JsonFactura);

let JsonPorCobrar = localStorage.getItem("BDPorCobrar");
let BDPorCobrar = JSON.parse(JsonPorCobrar);

//Objetos contenedores del carrito
let clienteActual = "";
let articuloActual = "";
let facturaActual = "";

let cart = [];

let producto = {
    nombre: "Pega",
    cantidad: 1,
    codigo: "12345",
    precio: 20,
}

//Funciones principales
function añadirCliente(nombre, direccion, rif, tlf) {
    BDCliente.push({
        nombre,
        direccion,
        rif,
        tlf,
    });
    alert("Registro exitoso")
    let nuevojson = JSON.stringify(BDCliente);

    localStorage.setItem("BDCliente", nuevojson);

    console.log(BDCliente)
}

//Funciones de busqueda 
function buscarCliente(busqueda) {

    let cliente = BDCliente.filter(item => $inputRif.value === item.rif);

    if (cliente.length) {
        if (busqueda) {
            return true;
        }
        $inputNomCli.value = cliente[0].nombre;
        $inputDir.value = cliente[0].direccion;
        $inputTel.value = cliente[0].tlf;
        clienteActual = cliente[0]

    } else {
        if (busqueda) {
            return false
        }
        alert("No encontrado");
    }
}
function buscarProducto(busqueda) {

    let producto = BDProducto.filter(item => $inputCod.value === item.codigo);

    if (producto.length) {
        if (busqueda) {
            return true;
        }
        $inputNomArt.value = producto[0].nombre;
        $inputPrec.value = producto[0].precio;
        $inputCan.value = $inputCan.value || 1;
        producto[0].precioTotal = producto[0].precio * $inputCan.value || producto[0].precio
        producto[0].cantidad = $inputCan.value;
        articuloActual = producto[0];
        console.log(articuloActual)
    } else {
        if (busqueda) {
            return false
        }
        alert("No encontrado");
    }
}

//Registro de cliente
function registrarCliente() {
    if (!buscarCliente(true)) {
        console.log("Hola");
        let nombre = $inputNomCli.value,
            direccion = $inputDir.value,
            rif = $inputRif.value,
            tlf = $inputTel.value;
        if (nombre && direccion && rif && tlf) {
            console.log(nombre)
            añadirCliente(nombre, direccion, rif, tlf);
            buscarCliente();
        } else {
            alert("Debes Ingresar toda la información")
        }
    } else {
        alert("El usuario ingresado ya existe")
    }
}


//Eventos de los botones de cliente y productos

let $inputNomCli = document.querySelector("#nombreCliente"),
    $inputRif = document.querySelector("#rifCliente"),
    $inputDir = document.querySelector("#dirCliente"),
    $inputTel = document.querySelector("#telCliente"),
    $btnBusCliente = document.querySelector("#btnBusCliente"),
    $btnRegCliente = document.querySelector("#btnRegCliente"),
    $btnEdiCliente = document.querySelector("#btnEdiCliente"),
    $btnEliCliente = document.querySelector("#btnEliCliente");

if ($inputRif && $inputRif && $inputDir && $inputTel && $btnBusCliente && $btnRegCliente) {

    $inputRif.addEventListener("submit", (e) => {
        e.preventDefault();
        buscarCliente();
    })
    $btnBusCliente.addEventListener("click", (e) => {
        e.preventDefault();
        buscarCliente();
    });
    $btnRegCliente.addEventListener("click", (e) => {
        e.preventDefault();
        registrarCliente();
    })
}

let $inputNomArt = document.querySelector("#nomArt"),
    $inputCod = document.querySelector("#codArt"),
    $inputCan = document.querySelector("#canArt"),
    $inputPrec = document.querySelector("#preArt"),
    $btnArt = document.querySelector("#btnArt");
if ($btnArt && $inputCan) {

    $btnArt.addEventListener("click", (e) => {
        e.preventDefault();
        buscarProducto();
        // if($inputNomArt.value === producto.nombre){
        //      $inputCod.value = producto.codigo;
        //      $inputPrec.value = parseInt($inputCan.value) * parseInt(producto.precio);

        // }

    }
    );
    $inputCan.addEventListener("submit", (e) => {
        e.preventDefault()
        $inputPrec.value = parseInt($inputCan.value) * parseInt(producto.precio);
    })
}

//Añadir al carrito de compra

let $cart = document.querySelector("#cart"),
    $btnCart = document.querySelector("#btnAgr");
if ($btnCart) {
    $btnCart.addEventListener("click", (e) => {
        if (articuloActual) {
            let items = ""
            items = document.querySelectorAll(".bill__cart__item");

            items.forEach(element => {

                element.remove(element)
            });



            buscarProducto();
            cart.push(articuloActual);
            console.log(cart)

            cart.forEach((item, index, array) => {

                let contenedor = document.createElement("div");
                contenedor.classList.add("bill__cart__item");
                $cart.appendChild(contenedor)

                let itemName = document.createElement("p");
                itemName.textContent = item.nombre;
                contenedor.appendChild(itemName);

                let itemCant = document.createElement("p");
                let cartCant = document.createElement("input");
                cartCant.value = item.cantidad;
                cartCant.addEventListener("keydown", (e) => {

                    if (e.key === "Enter") {
                        item.precioTotal = item.precio * cartCant.value || item.precio;
                        item.cantidad = cartCant.value || 1;
                        itemPrice.textContent = item.precioTotal;
                        console.log(cart)
                    }
                })

                itemCant.appendChild(cartCant);
                contenedor.appendChild(itemCant);

                let itemPrice = document.createElement("p");
                itemPrice.textContent = item.precioTotal;
                contenedor.appendChild(itemPrice);

                let itemDelete = document.createElement("button");
                itemDelete.textContent = "Eliminar";
                itemDelete.classList.add("item__delete")
                contenedor.appendChild(itemDelete);

                itemDelete.addEventListener("click", (e) => {
                    $cart.removeChild(contenedor);
                    let indexToDelete = cart.indexOf(item);
                    console.log(indexToDelete)
                    cart.splice(index, 1);
                    console.log(cart)
                })
            })



        } else {
            alert("Debes buscar un producto para poder agregarlo");
        }

    })

}


//Selecionar metodo de pago

let $checkMovil = document.querySelector("#movil"),
    $checkTransfer = document.querySelector("#transferencia"),
    $checkDivisa = document.querySelector("#divisa"),
    $checkEfectivo = document.querySelector("#efectivo"),
    $contenedorMetodos = document.querySelector("methodContainer");

$checkDivisa.addEventListener("change", (e) => {

});

// Seleccionar condición de pago
let $condition = document.querySelector("#condition");

$condition.addEventListener("change", (e) => {
    console.log(e.target.value)
    if (e.target.value === "15-dias" || e.target.value === "30-dias") {
        $checkTransfer.disabled = true;
        $checkDivisa.disabled = true;
        $checkEfectivo.disabled = true;
        $checkMovil.disabled = true;

    } else {
        $checkTransfer.disabled = false;
        $checkDivisa.disabled = false;
        $checkEfectivo.disabled = false;
        $checkMovil.disabled = false;
    }
    clienteActual.condicion = e.target.value;
})

// Evento de generación de factura

let $buttonFactura = document.querySelector("#buttonFactura");
let metodos = [];



if ($buttonFactura) {

    $buttonFactura.addEventListener("click", (e) => {
        e.preventDefault();

        if (cart && clienteActual && $checkDivisa.checked) {
            metodos.push("Divisa");

        }
        if (cart && clienteActual && $checkEfectivo.checked) {
            metodos.push("Efectivo");
        }
        if (cart && clienteActual && $checkMovil.checked) {
            metodos.push("Pago Movil");
        }
        if (cart && clienteActual && $checkTransfer.checked) {
            metodos.push("Transferencia");
        }

        if (cart && clienteActual && metodos) {
            if (!clienteActual.condicion) {
                clienteActual.condicion = "Contado";

            }
            const fechaActual = new Date();
            const dia = fechaActual.getDate();
            const mes = fechaActual.getMonth() + 1; // Los meses empiezan desde 0
            const anio = fechaActual.getFullYear();
            console.log(metodos)
            clienteActual.metodo = metodos.join(", ");
            metodos = [];
            facturaActual = { ...clienteActual };
            facturaActual.articulos = [...cart];
            clienteActual.nroFactura = String(BDFactura.length + 1).padStart(3, '0');
           facturaActual.nroFactura = String(BDFactura.length + 1).padStart(3, '0');
            facturaActual.fecha = `${dia}/${mes}/${anio}`;
            facturaActual.montoTotal = cart.reduce((acum, item) => acum + item.precioTotal, 0);
            BDFactura.push(facturaActual);
            console.log(cart)
            console.log(BDProducto)
            cart.forEach((item, idx) =>{
                console.log(item)
                BDProducto.forEach((producto, idx) =>{
                    console.log(producto)
                  if(item.codigo === producto.codigo){
                    producto.disponible -= item.cantidad;

                    console.log(BDProducto);
                  }
                })
            })
            
            alert("Hola");
            localStorage.setItem("facturaABuscar", "");
            localStorage.setItem("cliente", JSON.stringify(clienteActual, null, 2));
            localStorage.setItem("productos", JSON.stringify(cart, null, 2));
            localStorage.setItem("BDFactura", JSON.stringify(BDFactura, null, 2));
            localStorage.setItem("BDProducto", JSON.stringify(BDProducto, null, 2));
            // console.log(clienteActual)
            // window.location.href = "factura.html";



        } else {
            alert("Debes ingresar toda la información")
        }
    })
}


//Añadir Factura por cobrar

let $buttonPorCobrar = document.querySelector("#buttonPorCobrar");
$buttonPorCobrar.addEventListener("click", (e) => {

   function calcularVencimiento(fechaBase, dias) {
  let fecha = new Date(fechaBase); // Clona la fecha para no modificar la original
  fecha.setDate(fecha.getDate() + dias);
  return fecha;
}
const fechaActual = new Date();
const dia = fechaActual.getDate();
const mes = fechaActual.getMonth() + 1; // Los meses empiezan desde 0
const anio = fechaActual.getFullYear();
let vencimiento15 = calcularVencimiento(fechaActual, 15);
let vencimiento30 = calcularVencimiento(fechaActual, 30);


    if ($condition.value === "15-dias" || $condition.value === "30-dias" && cart && clienteActual) {
        facturaActual = { ...clienteActual };
        facturaActual.articulos = [...cart];
        facturaActual.fecha = `${dia}/${mes}/${anio}`;
        facturaActual.montoTotal = cart.reduce((acum, item) => acum + item.precioTotal, 0);
        if($condition.value === "15-dias"){
            facturaActual.vencimiento = vencimiento15.toLocaleDateString('es-VE')
        }else{
            facturaActual.vencimiento = vencimiento30.toLocaleDateString('es-VE')

        }
        facturaActual.estado = "Pendiente"
        BDPorCobrar.push(facturaActual);
        
        localStorage.setItem("BDPorCobrar", JSON.stringify(BDPorCobrar, null, 2));
    } else {
        alert("Debes establecer una condicion d pago de 15 o 30 días");
    }
})

const $inputBuscar = document.querySelector("#searchInput");
const $btnBuscar = document.querySelector("#buscar");

$btnBuscar.addEventListener("click", (e)=>{
    let found = false;
    BDFactura.forEach((item, idx) =>{
        
        if(item.nroFactura ===  $inputBuscar.value){
            localStorage.setItem("facturaABuscar", idx);
            window.location.href = "factura.html";
            found = true;
        } else{
            
        }
        
    });

    if(!found) alert("No se ha encontrado la factura")
})