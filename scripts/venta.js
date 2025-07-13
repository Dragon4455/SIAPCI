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
        disponible: 1,
        codigo: "12345",
        precio: 20,
}];
let clienteActual = "";

// let cliente = {
//     nombre: "Neomar",
//     direccion: "San Esteban",
//     tlf: "12345",
//     rif: "31.325.616",
// };
let producto ={
        nombre: "Pega",
        cantidad:1,
        codigo: "12345",
        precio: 20,
}
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


//Eventos de los botones

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
    if($inputNomArt.value === producto.nombre){
         $inputCod.value = producto.codigo;
         $inputPrec.value = parseInt($inputCan.value) * parseInt(producto.precio);
        
    }
        
    }
);
$inputCan.addEventListener("submit", (e)=>{
    $inputPrec.value = parseInt($inputCan.value) * parseInt(producto.precio);
})
