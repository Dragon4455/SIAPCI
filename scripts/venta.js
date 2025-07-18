//Objetos simuladores de la base de datos
let BDCliente = [{
    nombre: "Neomar",
    direccion: "San Esteban",
    tlf: "12345",
    rif: "31325616",
},
{
    nombre: "Elías",
    direccion: "Vistamar",
    tlf: "12345",
    rif: "31779388",
}];
let BDProducto = [{
        nombre: "Pega",
        disponible: 10,
        codigo: "002",
        precio: 20,
       precioTotal: this.precio,
},
{
        nombre: "Hoja",
        disponible: 100,
        codigo: "001",
        precio: 3,
       precioTotal: this.precio,
}];
let BDFactura = [{
     nombre: "Neomar",
    direccion: "San Esteban",
    tlf: "12345",
    rif: "31325616",
    metodo: "Pago movil",
    nroFactura: "0001",
    articulos: [],
    iva: "",
    montoTotal: "30bs",
}]
//Objetos contenedores del carrito
let clienteActual = "";
let articuloActual = "";
let facturaActual = "";

let cart = [];

let producto ={
        nombre: "Pega",
        cantidad:1,
        codigo: "12345",
        precio: 20,
}

//Funciones principales
function añadirCliente(nombre, direccion,rif,tlf){
   BDCliente.push({
        nombre,
        direccion,
        rif,
        tlf,
    });
    alert("Registro exitoso")
    console.log(BDCliente)
}

//Funciones de busqueda 
function buscarCliente(busqueda){
    
    let cliente = BDCliente.filter(item => $inputRif.value === item.rif);
    
    if(cliente.length){
        if(busqueda){
            return true;
        }
        $inputNomCli.value = cliente[0].nombre;
        $inputDir.value = cliente[0].direccion;
        $inputTel.value = cliente[0].tlf;
        clienteActual = cliente[0]
        
    } else{ 
        if(busqueda){
            return false
        }
        alert("No encontrado");
    }
}
function buscarProducto(busqueda){
    
    let producto = BDProducto.filter(item => $inputCod.value === item.codigo);
    
    if(producto.length){
        if(busqueda){
            return true;
        }
        $inputNomArt.value = producto[0].nombre;
        $inputPrec.value =  producto[0].precio ;
        $inputCan.value =   $inputCan.value || 1;
        producto[0].precioTotal =  producto[0].precio * $inputCan.value || producto[0].precio
        producto[0].cantidad = $inputCan.value;
        articuloActual = producto[0];
       console.log(articuloActual)
    } else{ 
        if(busqueda){
            return false
        }
        alert("No encontrado");
    }
}

//Registro de cliente
function registrarCliente(){
    if(!buscarCliente(true)){
        console.log("Hola");
        let nombre = $inputNomCli.value,
            direccion = $inputDir.value,
            rif = $inputRif.value,
            tlf = $inputTel.value;
            if(nombre && direccion && rif && tlf){
                console.log(nombre)
                añadirCliente(nombre,direccion,rif,tlf);
                buscarCliente();
            } else{
                alert("Debes Ingresar toda la información")
            }
    } else{
        alert("El usuario ingresado ya existe")
    }
}


//Eventos de los botones de cliente y productos

let $inputNomCli = document.querySelector("#nombreCliente"),
    $inputRif = document.querySelector("#rifCliente"),
    $inputDir = document.querySelector("#dirCliente"),
    $inputTel = document.querySelector("#telCliente"),
    $btnBusCliente = document.querySelector("#btnBusCliente"),
    $btnRegCliente = document.querySelector("#btnRegCliente");

$inputRif.addEventListener("submit", (e)=>{
    buscarCliente()
})
$btnBusCliente.addEventListener("click", (e)=>{
    e.preventDefault();
    buscarCliente();
});
$btnRegCliente.addEventListener("click", (e)=>{
    e.preventDefault();
    registrarCliente();
})

let $inputNomArt = document.querySelector("#nomArt"),
    $inputCod = document.querySelector("#codArt"),
    $inputCan = document.querySelector("#canArt"),
    $inputPrec = document.querySelector("#preArt"),
    $btnArt = document.querySelector("#btnArt");

    $btnArt.addEventListener("click", (e)=>{
    e.preventDefault();
    buscarProducto();
    // if($inputNomArt.value === producto.nombre){
    //      $inputCod.value = producto.codigo;
    //      $inputPrec.value = parseInt($inputCan.value) * parseInt(producto.precio);
        
    // }
        
    }
);
$inputCan.addEventListener("submit", (e)=>{
    $inputPrec.value = parseInt($inputCan.value) * parseInt(producto.precio);
})

//Añadir al carrito de compra

let $cart = document.querySelector("#cart"),
    $btnCart = document.querySelector("#btnAgr");

    $btnCart.addEventListener("click",(e) =>{
        if(articuloActual){
            let items = ""
             items = document.querySelectorAll(".bill__cart__item");
      
            items.forEach(element => {
               
            element.remove(element)
        });
    


            buscarProducto();
            cart.push(articuloActual);
            console.log(cart)

            cart.forEach((item, index, array)=>{
                
                let contenedor = document.createElement("div");
                contenedor.classList.add("bill__cart__item");
                $cart.appendChild(contenedor)
    
                let itemName = document.createElement("p");
                itemName.textContent = item.nombre;
                contenedor.appendChild(itemName);

                let itemCant = document.createElement("p");
                let cartCant = document.createElement("input");
                cartCant.value = item.cantidad;
                cartCant.addEventListener("keydown", (e)=>{
                   
                    if(e.key === "Enter"){
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

                itemDelete.addEventListener("click",(e)=>{
                    $cart.removeChild(contenedor);
                    let indexToDelete = cart.indexOf(item);
                    console.log(indexToDelete)
                    cart.splice(index, 1);
                    console.log(cart)
                })
            })

            
            
        } else{
            alert("Debes buscar un producto para poder agregarlo");
        }

    })

    
//Selecionar metodo de pago

let $checkMovil = document.querySelector("#movil"),
    $checkTransfer = document.querySelector("#transferencia"),
    $checkDivisa = document.querySelector("#divisa"),
    $checkEfectivo = document.querySelector("#efectivo");

   